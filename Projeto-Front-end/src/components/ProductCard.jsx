import { useState } from "react";

const Price = ({ value }) => {
  // Suponha que value seja uma string como "R$ 199,99"
  const [currency, amount, cents] = value.match(/(R\$)?\s?(\d+),(\d+)/).slice(1);

  return (
    <div>
      <span style={{ fontFamily: 'Arial', fontSize: "14px", verticalAlign: "button" }}>{currency}</span>
      <span style={{ fontFamily: 'Arial', fontSize: "32px", fontWeight: "bold", margin: "0 4px" }}>{amount}</span>
      <span style={{ fontFamily: 'Arial', fontSize: "14px", verticalAlign: "button" }}>,{cents}</span>
    </div>
  );
};

const ColorSelector = () => {
  const colors = ["Preto", "Branco", "Cinza", "Azul", "Vermelho", "Verde"];
  const [selectedColors, setSelectedColors] = useState([]);

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else if (selectedColors.length < 5) {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <p><b>Cores disponíveis</b></p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => toggleColor(color)}
            style={{
              padding: "3px 9px",
              borderRadius: "5%",
              border: selectedColors.includes(color)
                ? "2px solid #ff69b4"
                : "1px solid #ccc",
              backgroundColor: selectedColors.includes(color)
                ? "#ffe4ef"
                : "#f9f9f9",
              cursor: "pointer",
              fontSize: "14px",
              transition: "0.2s",
            }}
          >
            {color}
          </button>
        ))}
      </div>
      {selectedColors.length === 5 && (
        <p style={{ fontSize: "12px", color: "red", marginTop: "5px" }}>
          Máximo de 5 cores selecionadas.
        </p>
      )}
    </div>
  );
};



const ShoeSizeSelector = () => {
  const sizes = [37, 38, 39, 40, 41];
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      {sizes.map((size) => (
        <label key={size} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input
            type="checkbox"
            value={size}
            checked={selectedSizes.includes(size)}
            onChange={() => handleChange(size)}
          />
          {size}
        </label>
      ))}
    </div>
  );
};



// COMPONENTE DE AVALIAÇÃO
export const RatingStars = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    if (onRatingChange) onRatingChange(index);
  };

  return (
    <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>
      {[...Array(totalStars)].map((_, i) => {
        const starIndex = i + 1;
        return (
          <span
            key={starIndex}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => setHovered(starIndex)}
            onMouseLeave={() => setHovered(0)}
            style={{
              fontSize: "24px",
              color: starIndex <= (hovered || rating) ? "gold" : "#ccc",
              transition: "color 0.2s",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

// COMPONENTE DE CARROSSEL
export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div >
    <div style={{ display: "flex" }}>
      <div
        className="carousel"
        style={{
          maxWidth: "600px",
          margin: "auto",
          position: "relative",
          marginTop: "60px",
          marginLeft: "115px",
        }}
      >
        {/* Imagem principal */}
        <div style={{ position: "relative" }}>
          <img
            src={images[currentIndex]}
            alt={`Imagem ${currentIndex + 1}`}
            style={{ width: "100%", borderRadius: "0px" }}
          />

          {/* Setas */}
          <button
            onClick={goToPrevious}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            ›
          </button>
        </div>

        {/* Thumbnails */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "10px",
            overflowX: "auto",
            paddingBottom: "5px",
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumb ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                cursor: "pointer",
                border:
                  index === currentIndex
                    ? "2px solid pink"
                    : "2px solid transparent",
                borderRadius: "6px",
                transition: "border 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Info lateral */}
      <div>
        <h4 style={{ marginTop: "52px", marginRight: "319px" }}>
          Tênis Nike Revolution <br />
          6 Next Nature Masculino
        </h4>
        <p style={{ fontSize: "12px" }}>Casual | Nike | REF: 8654588</p>

        {/* Estrelas de avaliação */}
        <RatingStars />
        <Price value="R$ 219,00"/>
        <p><b>Descrição do produto</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

        <p><b>Tamanho</b></p>
         <ShoeSizeSelector />
         <ColorSelector />
        

        <button
        style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#ff69b4",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background-color 0.3s",
        }}
        onClick={() => alert("Produto adicionado à comparação")}
        >
        COMPRAR
        </button>


            </div>
            </div>
            <div>
            <div style={{backgroundColor: '#ffffff52'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4 style={{marginLeft: '115px', marginTop: '100px'}}>Produtos relacionados</h4>
                <p style={{color: "#f00888", marginRight: '115px', marginTop: '100px'}}>Ver todos &rarr;</p>
            </div>
            </div>

            <div>
                <img src="/public/Group 53593.png" alt="" style={{marginTop: '36px', width: '290px', height: '420px', marginLeft: '115px'}}/>
                <img src="/public/Group 53593.png" alt="" style={{marginTop: '36px', width: '290px', height: '420px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{marginTop: '36px', width: '290px', height:' 420px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{marginLeft: '0px', width: '290px', height:' 432px', marginTop: '36px'}}/>
                </div>
            </div>
            </div>
           
        );
        };

        // EXEMPLO DE USO
        const App = () => {
        const images = [
            "/public/nike.png",
            "/public/nike (1).png",
            "/public/nike (2).png",
            "/public/nike (3).png",
        ];

        return <Carousel images={images} />;
        };
        export default App;

     
