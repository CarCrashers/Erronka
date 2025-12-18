import '../../layout/layout.css';
import './navBar.css';
import { Link } from "react-router-dom";


function navBar() {
  return (
    <nav className="navbar navbar-expand-lg h-25 w-100">
        <div className="container d-flex flex-row justify-content-lg-center justify-content-md-start align-items-center w-100 h-100">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-lg-center justify-content-md-start nav-collapse-narrow" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link d-flex d-row px-4 fs-5 navBar-link">
                        <Link to="/" className="text-decoration-none text-secondary navBar-link-inner">
                            <i className="bi bi-house-door-fill"></i>&nbsp;&nbsp;Home
                        </Link>
                    </a>
                    <li className="nav-item dropdown custom-responsive-dropdown">
                        <a className="nav-link dropdown-toggle px-4 fs-5 navBar-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-cart4"></i>&nbsp;&nbsp;Salerosketa</a>
                        <ul className="dropdown-menu w-auto">
                            <li><Link to="/erosi" className="text-decoration-none text-black navBar-link-inner">
                                <a className="dropdown-item navBar-link"><i className="bi bi-box-seam-fill"></i>&nbsp;&nbsp;Erosi</a></Link>
                            </li>
                            <li><Link to="/saldu" className="text-decoration-none text-black navBar-link-inner">
                                <a className="dropdown-item navBar-link"><i className="bi bi-box-seam-fill"></i>&nbsp;&nbsp;Saldu</a></Link>
                            </li>
                            <li><Link to="/Desguazatu" className="text-decoration-none text-dark navBar-link-inner">
                                <a className="dropdown-item navBar-link"><i className="bi bi-box-seam-fill"></i>&nbsp;&nbsp;Desguazatu</a></Link>
                            </li>
                        </ul>
                    </li>
                    <a className="nav-link px-4 fs-5 navBar-link">
                        <Link to="/norGara" className="text-decoration-none text-secondary navBar-link-inner"><i className="bi bi-buildings-fill"></i>&nbsp;&nbsp;Nor gara?</Link>
                    </a>  
                </div>
            </div>
        </div>
    </nav>
  );
}

export default navBar;
