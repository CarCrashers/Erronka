import Logo from "../../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import "./footer.css";

function footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center px-5 border-top">
        <div className="col-md-4 d-flex align-items-center text-white">
            <Link to="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1" aria-label="Bootstrap">
                <img className="h-50" src={Logo} alt="Logo"></img>
            </Link>
            <span className="mb-3 mb-md-0">
            © 2025 CarCrashers
            </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
                <a className="text-white" href="#" aria-label="Instagram">
                    <i class="bi bi-instagram"></i>
                </a>
            </li>
            <li className="ms-3">
                <a className="text-white" href="#" aria-label="Facebook">
                    <i class="bi bi-twitter-x"></i>
                </a>
            </li>
            <li className="ms-3">
                <a className="text-white" href="#" aria-label="Facebook">
                    <i class="bi bi-github"></i>
                </a>
            </li>
        </ul>
    </footer>
  );
}

export default footer;