import '../../layout/layout.css';
import './navBar.css';
import { Link } from "@inertiajs/react";

function navBar() {
  return (
    <nav className="navbar navbar-expand-lg h-auto w-100">
      <div className="container-fluid d-flex flex-row justify-content-lg-center justify-content-md-start align-items-center w-100 h-100">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-lg-center justify-content-md-start nav-collapse-narrow" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link href="/" className="nav-link d-flex d-row fs-6 navBar-link text-decoration-none text-secondary navBar-link-inner">
              <i className="bi bi-house-door-fill"></i>&nbsp;&nbsp;<span className="d-none d-sm-inline">Home</span>
            </Link>

            <li className="nav-item dropdown custom-responsive-dropdown">
              <Link className="nav-link dropdown-toggle fs-6 navBar-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-cart4"></i>&nbsp;&nbsp;<span className="d-none d-sm-inline">Salerosketa</span>
              </Link>

              <ul className="dropdown-menu w-auto">
                <li>
                  <Link href="/erosi" className="dropdown-item navBar-link text-decoration-none text-black navBar-link-inner small">
                    <i className="bi bi-box-seam-fill"></i>&nbsp;&nbsp;Erosi
                  </Link>
                </li>

                <li>
                  <Link href="/saldu" className="dropdown-item navBar-link text-decoration-none text-black navBar-link-inner small">
                    <i className="bi bi-box-seam-fill"></i>&nbsp;&nbsp;Saldu
                  </Link>
                </li>

                <li>
                  <Link href="/desguazatu" className="dropdown-item navBar-link text-decoration-none text-dark navBar-link-inner small">
                    <i className="bi bi-box-seam-fill"></i>&nbsp;&nbsp;Desguazatu
                  </Link>
                </li>
              </ul>
            </li>

            <Link href="/norGara" className="nav-link fs-6 navBar-link text-decoration-none text-secondary navBar-link-inner">
              <i className="bi bi-buildings-fill"></i>&nbsp;&nbsp;<span className="d-none d-sm-inline">Nor gara?</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navBar;
