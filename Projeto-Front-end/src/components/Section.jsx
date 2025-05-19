import { useState } from "react";

const slides = [
  {
    imagem: "/Carrossel.png",
    titulo: "Queima de stoque Nike🔥",
    descricao: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
  },
  {
    imagem: "/img2.jpg",
    titulo: "Produto 2",
    descricao: "Descrição do produto 2. Incrível e único!",
  },
  {
    imagem: "/img3.jpg",
    titulo: "Produto 3",
    descricao: "Descrição do produto 3. Muito procurado!",
  },
  {
    imagem: "/img4.jpg",
    titulo: "Produto 4",
    descricao: "Descrição do produto 4. Oferta imperdível!",
  },
];

export const Carrossel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="carrossel-texto-container" style={{height: '100vh', backgroundColor: 'rgba(238, 238, 238, 0.582)'}}>

      <div className="slide">
        <div style={{display: 'flex'}}>
        <div className="info">
                <p style={{marginLeft: '115px', marginTop: '100px', color: '#f8931f', fontWeight:'bold'}}>Melhores ofertas personalizadas</p>
                <h2 style={{marginLeft: '115px', fontSize: '60px', fontWeight:'bold', fontFamily: 'Arial'}}>{slides[index].titulo}</h2>
                <p style={{marginLeft: '115px'}}>{slides[index].descricao}</p>
                <button className="botao-acao" style={{marginLeft: '115px', width: '200px', height: "38px", backgroundColor: "#aa0f7c", border: 'none', color: 'white', borderRadius: '9px'}}>Ver Ofertas</button>
        </div>
        <div>
            <img src={slides[index].imagem} alt={slides[index].titulo} style={{marginRight:'170px', marginTop: '-80px',  transform: 'rotate(-20deg)'}} />
            <img src="/public/Ornament.png" alt="" style={{position: 'absolute', width: '140px', height: '140px', left: '1180px', top: '225px'}} />
        </div>
        </div>
      </div>

      <div className="dots" style={{textAlign: 'center', marginTop: '-10px'}}>
        {slides.map((_, i) => (
          <span style={{height: '12px', width: '12px', margin:' 0 5px', backgroundColor:' #747474', borderRadius: '50%', display: 'inline-block', cursor: 'pointer', transition: 'background-color 0.3s'}}
            key={i}
            className={`dot ${i === index ? "active style={background-color: '#c73364'}" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};
  

export const OfertaEspecial = () => {
    return ( 
        <>
        <div style={{display: "flex", marginTop: '80px'}}>
            <div id="tenis-oferta">
                <div style={{ marginLeft:'160px', width: '420px', height: '350px', background: 'linear-gradient(to top, #ffffff, #43666e22)', borderTopLeftRadius: '550px', borderTopRightRadius: '550px', marginBottom:'50px'}}>
                    <img src="public/oferta.png" alt="" style={{width:'528px', marginTop: '31px', marginLeft: '-70px'}}/>
                </div>
            </div>
            <div id="texto-oferta" style={{marginLeft: '160px'}}>
                <p style={{color: '#c91593', fontFamily: 'Arial', fontWeight:'bold'}}>Oferta especial</p>
                <h3 style={{color: '##cc2277', fontFamily: 'Arial', fontWeight:'bold', fontSize: '41px'}}>Air Jordan edição de <br /> colecionador</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br />ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />aliquip</p>
                <button style={{width: '200px', height: "38px",backgroundColor: "#aa0f7c", border: 'none', color: 'white', borderRadius: '9px'}}>Ver Oferta</button>
            </div>
        </div>
        </>
     );
}
 
