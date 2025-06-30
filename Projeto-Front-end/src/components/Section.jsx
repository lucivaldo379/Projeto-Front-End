import { useState } from "react";
import { Link } from "react-router-dom";

// Corrigido: extensões .jpg e caminhos sem "/public/"
export const slides = [
  {
    imagem: "/Carrossel.png",
    titulo: "Queima de estoque Nike🔥",
    descricao: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
  },
  {
    imagem: "/nike (2).jpg",
    titulo: "Produto 2",
    descricao: "Descrição do produto 2. Incrível e único!",
  },
  {
    imagem: "/nike (3).jpg",
    titulo: "Produto 3",
    descricao: "Descrição do produto 3. Muito procurado!",
  },
  {
    imagem: "/nike (1).jpg",
    titulo: "Produto 4",
    descricao: "Descrição do produto 4. Oferta imperdível!",
  },
];

export const Carrossel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="carrossel-texto-container" style={{ height: '109vh', backgroundColor: '#F5F5F5' }}>
      <div className="slide">
        <div style={{ display: 'flex' }}>
          <div className="info">
            <p style={{ marginLeft: '115px', marginTop: '100px', color: '#f8931f', fontWeight: 'bold' }}>Melhores ofertas personalizadas</p>
            <h2 style={{ marginLeft: '115px', fontSize: '60px', fontWeight: 'bold', fontFamily: 'Arial' }}>{slides[index].titulo}</h2>
            <p style={{ marginLeft: '115px' }}>{slides[index].descricao}</p>
            <Link
              to="/productview"
              style={{
                display: 'inline-block',
                textAlign: 'center',
                lineHeight: '38px',
                marginLeft: '115px',
                width: '200px',
                height: "38px",
                backgroundColor: "#aa0f7c",
                border: 'none',
                color: 'white',
                borderRadius: '9px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Ver Ofertas
            </Link>
          </div>
          <div>
            <img src={slides[index].imagem} alt={slides[index].titulo} style={{ marginRight: '170px', marginTop: '-80px', transform: 'rotate(-20deg)' }} />
            <img src="/Ornament.png" alt="" style={{ position: 'absolute', width: '140px', height: '140px', left: '1180px', top: '225px' }} />
          </div>
        </div>
      </div>

      <div className="dots" style={{ textAlign: 'center', marginTop: '-10px' }}>
        {slides.map((_, i) => (
          <span
            key={i}
            style={{
              height: '12px',
              width: '12px',
              margin: '0 5px',
              backgroundColor: i === index ? '#c73364' : '#747474',
              borderRadius: '50%',
              display: 'inline-block',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export const ColecoesDestaque = () => {
  return (
    <>
      <div style={{ backgroundColor: '#f0efef52', marginTop: '-99px' }}>
        <div style={{ marginTop: '40px' }}>
          <h4 style={{ marginBottom: '-19px', marginLeft: '62px', marginTop: '99px', padding: '55px' }}>Coleções especiais</h4>
          <div style={{ display: 'flex', marginLeft: '0px' }}>
            <img src="/collection-1.png" style={{ width: '369px', height: '212px', marginLeft: '115px', borderRadius: '9px' }} />
            <img src="/collection-2.png" style={{ width: '369px', height: '212px', marginLeft: '10px', borderRadius: '9px' }} />
            <img src="/collection-3.png" style={{ width: '369px', height: '212px', marginLeft: '10px', borderRadius: '9px' }} />
          </div>
        </div>
        <div>
          <h4 style={{ marginLeft: '588px', marginTop: '120px' }}>Coleções especiais</h4>
          <div style={{ display: 'flex', marginTop: '40px' }}>
            {["Group 53591.png", "Group 53590.png", "Group 53589.png", "Group 53588.png", "Group 53587.png"].map((img, i) => (
              <div key={i} style={{
                marginBottom: '80px',
                marginLeft: i === 0 ? '380px' : '30px',
                width: '100px',
                height: '100px',
                backgroundColor: '#FFFFFF',
                borderRadius: '50%'
              }}>
                <img src={`/${img}`} alt="" style={{ marginLeft: '-27px', marginTop: '-23px' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const ProdutosEmAlta = () => {
  return (
    <>
      <div style={{ backgroundColor: '#f0efef52' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h4 style={{ marginLeft: '115px', marginTop: '100px' }}>Produtos em alta</h4>
          <p style={{ color: "#f00888", marginRight: '115px', marginTop: '100px' }}>Ver todos &rarr;</p>
        </div>
        <div>
          {["Group 53593.png", "Group 53593.png", "Group 53595.png", "Group 53595.png", "Group 53595.png", "Group 53595.png", "Group 53595.png", "Group 53595.png"].map((img, i) => (
            <img
              key={i}
              src={`/${img}`}
              alt=""
              style={{
                width: '290px',
                height: '430px',
                marginLeft: i === 0 ? '101px' : undefined,
                marginBottom: i >= 4 ? '130px' : undefined,
                marginTop: i >= 4 ? '60px' : undefined
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const OfertaEspecial = () => {
  return (
    <>
      <div style={{ display: "flex", marginTop: '80px' }}>
        <div id="tenis-oferta">
          <div style={{
            marginLeft: '160px',
            width: '420px',
            height: '350px',
            background: 'linear-gradient(to top, #ffffff, #43666e22)',
            borderTopLeftRadius: '550px',
            borderTopRightRadius: '550px',
            marginBottom: '50px'
          }}>
            <img src="/oferta.png" alt="" style={{ width: '528px', marginTop: '31px', marginLeft: '-70px' }} />
          </div>
        </div>
        <div id="texto-oferta" style={{ marginLeft: '160px' }}>
          <p style={{ color: '#c91593', fontFamily: 'Arial', fontWeight: 'bold' }}>Oferta especial</p>
          <h3 style={{ color: '#cc2277', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '41px' }}>
            Air Jordan edição de <br /> colecionador
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />
            aliquip
          </p>
          <button style={{
            width: '200px',
            height: "38px",
            backgroundColor: "#aa0f7c",
            border: 'none',
            color: 'white',
            borderRadius: '9px'
          }}>
            Ver Oferta
          </button>
        </div>
      </div>
    </>
  );
};

