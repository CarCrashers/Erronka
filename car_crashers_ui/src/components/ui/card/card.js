import './card.css';
import imgCar from '../../../assets/images/carExample.jpeg';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <div className="card shadow-lg">
        <img src={imgCar} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Ford</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Fiesta</h6>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Prezioa
                    <span className="badge text-bg-warning rounded-pill">5000 €</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Urtea
                    <span className="badge text-bg-warning rounded-pill">1999</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Kilometroak
                    <span className="badge text-bg-warning rounded-pill">200000 Km</span>
                </li>
            </ul>
            <Link to='/details'>
                <a href="#" className="btn btn-secondary mt-2">Ikusi <i className="bi bi-box-arrow-up-right"></i></a>
            </Link>
        </div>
    </div> 
  );
}

export default Card;