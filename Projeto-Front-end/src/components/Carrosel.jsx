
const Carrossel = () => {
  return (
    <div id="mainBanner" className="carousel slide" data-bs-ride="carousel">
      {/* Indicadores (bolinhas) */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/home-slide-1.jpeg" className="d-block w-100" alt="Banner 1" />
        </div>
        <div className="carousel-item">
          <img src="/home-slide-2.jpeg" className="d-block w-100" alt="Banner 2" />
        </div>
        <div className="carousel-item">
          <img src="/img/banner3.jpg" className="d-block w-100" alt="Banner 3" />
        </div>
        <div className="carousel-item">
          <img src="/img/banner4.jpg" className="d-block w-100" alt="Banner 4" />
        </div>
      </div>

      {/* Botões de navegação (opcional) */}
      <button className="carousel-control-prev" type="button" data-bs-target="#mainBanner" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#mainBanner" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
};

export default Carrossel;
