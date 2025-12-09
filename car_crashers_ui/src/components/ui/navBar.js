import { Link } from 'react-router-dom';
import '../layout/layout.css';

function navBar() {
  return (
    <nav className="navbar navbar-expand-lg rounded-5 h-25 w-50">
        <div className="container d-flex flex-row justify-content-evenly align-items-center w-100 h-100">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link d-flex d-row px-4 fs-5" href="#">
                    <i className="bi bi-house-door-fill text-black"></i>
                    &nbsp;&nbsp;Home
                </a>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-4 fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-cart4"></i> 
                        &nbsp;&nbsp;Salerosketa
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#"><i class="bi bi-basket2-fill"></i>&nbsp;&nbsp;Erosi</a></li>
                        <li><a className="dropdown-item" href="#"><i class="bi bi-box-seam-fill"></i>&nbsp;&nbsp;Saldu</a></li>
                        <li><a className="dropdown-item" href="#"><i class="bi bi-box-seam-fill"></i><Link to="/Desguazatu" className='text-decoration-none '>&nbsp;&nbsp;Desguazatu</Link></a></li>

                    </ul>
                </li>

                <a className="nav-link px-4 fs-5" href="#">
                    <i className="bi bi-buildings-fill"></i>
                    &nbsp;&nbsp;Nor gara?
                </a>
            </div>
            </div>
            <button className="btn btn-outline-dark bg-orange" type="submit"><i className="bi bi-person-circle"></i> Hasi Saioa</button>
        </div>
    </nav>
  );
}

export default navBar;
