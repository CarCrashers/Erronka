import imgCar from '@assets/images/carExample.jpeg';

function Carrusel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide w-100 rounded-3" style={{ minHeight: '300px' }}>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-href="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-href="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-href="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner rounded-3">
        <div className="carousel-item active" style={{ minHeight: '300px' }}>
          <img
            src={imgCar}
            className="d-block w-100 h-100 object-fit-cover"
            alt="Produktua 1"
            style={{ minHeight: '300px' }}
          />
        </div>
        <div className="carousel-item" style={{ minHeight: '300px' }}>
          <img
            src={imgCar}
            className="d-block w-100 h-100 object-fit-cover"
            alt="Produktua 2"
            style={{ minHeight: '300px' }}
          />
        </div>
        <div className="carousel-item" style={{ minHeight: '300px' }}>
          <img
            src={imgCar}
            className="d-block w-100 h-100 object-fit-cover"
            alt="Produktua 3"
            style={{ minHeight: '300px' }}
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrusel;
