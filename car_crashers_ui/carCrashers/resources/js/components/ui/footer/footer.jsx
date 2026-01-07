import Logo from "../../../../assets/images/logo_b.png";
// import { Link } from "react-router-dom";
import "./footer.css";

function footer() {
  return (
    <footer className="bg-dark text-white py-5 border-top">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-4 mb-md-0">
            <a href="/" className="text-decoration-none mb-3 d-block">
                <img className="w-50" src={Logo} alt="Logo"/>
            </a>
            <p className="text-white">
              Zure auto desguazatzaile fidagarria. Kalitatezko ibilgailuak eta ordezko piezak saltzen ditugu.
            </p>

            <p className="text-secondary small mb-0">
              © 2025 CarCrashers. Todos los derechos reservados.
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3 fw-bold">Web Gunea</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-white text-decoration-none hover-grey">Home</a></li>
              <li className="mb-2"><a href="/Erosi" className="text-white text-decoration-none hover-grey">Erosi</a></li>
              <li className="mb-2"><a href="/Saldu" className="text-white text-decoration-none hover-grey">Saldu</a></li>
              <li className="mb-2"><a href="/Desguazatu" className="text-white text-decoration-none hover-grey">Desguazatu</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="text-uppercase mb-3 fw-bold">Kontaktua</h5>
            <ul className="list-unstyled text-white">
              <li className="mb-2">Tel: +34 900 123 456</li>
              <li className="mb-2">Email-a: info@carcrashers.com</li>
              <li className="mb-2">Ordutegia: L-V 9:00-19:00</li>
            </ul>

            <div className="d-flex mb-3">
                <a className="text-white me-3 fs-5 hover-grey" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                </a>
                <a className="text-white me-3 fs-5 hover-grey" href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a className="text-white fs-5 hover-grey" href="https://github.com" target="_blank" rel="noreferrer" aria-label="Github">
                    <i className="bi bi-github"></i>
                </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default footer;