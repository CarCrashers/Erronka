import '../../layout/layout.css';
import './navBar.css';

function navBar() {
  return (
    <nav className="navbar navbar-expand-lg h-25 w-100">
      <div className="container d-flex flex-row justify-content-lg-center justify-content-md-start align-items-center w-100 h-100">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-lg-center justify-content-md-start nav-collapse-narrow"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              href="/"
              className="nav-link d-flex d-row px-4 fs-5 navBar-link text-decoration-none text-secondary navBar-link-inner"
            >
              <i className="bi bi-house-door-fill"></i>&nbsp;&nbsp;Home
            </a>

            <li className="nav-item dropdown custom-responsive-dropdown">
              <a
                className="nav-link dropdown-toggle px-4 fs-5 navBar-link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-cart4"></i>&nbsp;&nbsp;Salerosketa
              </a>

              <ul className="dropdown-menu w-auto">
                <li>
                  <a
                    href="/erosi"
                    className="dropdown-item navBar-link text-decoration-none text-black navBar-link-inner"
                  >
                    <i className="bi bi-box-seam-fill"></i>&nbsp;&nbsp;Erosi
                  </a>
                </li>

                <li>
                  <a
                    href="/saldu"
                    className="dropdown-item navBar-link text-decoration-none text-black navBar-link-inner"
                  >
                    <i className="bi bi-box-seam-fill"></i>&nbsp;&nbsp;Saldu
                  </a>
                </li>

                <li>
                  <a
                    href="/desguazatu"
                    className="dropdown-item navBar-link text-decoration-none text-dark navBar-link-inner"
                  >
                    <i className="bi bi-box-seam-fill"></i>&nbsp;&nbsp;Desguazatu
                  </a>
                </li>
              </ul>
            </li>

            <a
              href="/norGara"
              className="nav-link px-4 fs-5 navBar-link text-decoration-none text-secondary navBar-link-inner"
            >
              <i className="bi bi-buildings-fill"></i>&nbsp;&nbsp;Nor gara?
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navBar;
