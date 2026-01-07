import imgCar from '../../../assets/images/carExample.jpeg';

function Carrusel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide h-100">
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

      <div className="carousel-inner rounded-4 h-100">
        <div className="carousel-item active h-100">
          <img
            src={imgCar}
            className="d-block w-100 h-100 object-fit-cover"
            alt="Dubai"
          />
        </div>
        <div className="carousel-item h-100">
          <img
            src={imgCar}
            className="d-block w-100 h-100 object-fit-cover"
            alt="Hong Kong"
          />
        </div>
        <div className="carousel-item h-100">
          <img
            src={imgCar}
            className="d-block w-100 h-100 object-fit-cover"
            alt="Taiwan"
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
