import './card.css';
import imgCar from '../../../assets/images/carExample.jpeg';

function Card() {
  return (
    <div className="card shadow-lg mt-5">
        <img src={imgCar} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h5 className="card-title">Ford</h5>
                <a href="#"><i className="bi bi-heart text-danger"></i></a>
            </div>
            <h6 className="card-subtitle mb-2 text-body-secondary">Fiesta</h6>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Precio
                    <span className="badge text-bg-warning rounded-pill">5000 $</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Año
                    <span className="badge text-bg-warning rounded-pill">1999</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Kilometros
                    <span className="badge text-bg-warning rounded-pill">200000 Km</span>
                </li>
            </ul>
            <a href="#" className="btn btn-secondary mt-2">Ver <i className="bi bi-box-arrow-up-right"></i></a>
        </div>
    </div> 
  );
}

export default Card;