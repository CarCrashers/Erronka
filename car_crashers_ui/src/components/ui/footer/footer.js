import Logo from "../../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import "./footer.css";

function footer() {
  return (
    <footer className="bg-dark text-white py-5 border-top">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-4 mb-md-0">
            <Link to="/" className="text-decoration-none mb-3 d-block">
                <img className="h-50" src={Logo} alt="Logo"/>
            </Link>
            <p className="text-secondary">
              Zure auto desguazatzaile fidagarria. Kalitatezko ibilgailuak eta ordezko piezak saltzen ditugu.
            </p>
            
            <div className="d-flex mb-3">
                <a className="text-white me-3 fs-5" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                </a>
                <a className="text-white me-3 fs-5" href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a className="text-white fs-5" href="https://github.com" target="_blank" rel="noreferrer" aria-label="Github">
                    <i className="bi bi-github"></i>
                </a>
            </div>

            <p className="text-muted small mb-0">
              © 2025 CarCrashers. Todos los derechos reservados.
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3 fw-bold">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-secondary text-decoration-none hover-white">Home</Link></li>
              <li className="mb-2"><Link to="/Erosi" className="text-secondary text-decoration-none hover-white">Erosi</Link></li>
              <li className="mb-2"><Link to="/Saldu" className="text-secondary text-decoration-none hover-white">Saldu</Link></li>
              <li className="mb-2"><Link to="/Desguazatu" className="text-secondary text-decoration-none hover-white">Desguazatu</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="text-uppercase mb-3 fw-bold">Contacto</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Tel: +34 900 123 456</li>
              <li className="mb-2">Email: info@carcrashers.com</li>
              <li className="mb-2">Horario: L-V 9:00-19:00</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default footer;