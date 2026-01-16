//import { usePage } from "@inertiajs/react";
import { useState } from "react";
import './headerDashboard.css';
import Logo from "@assets/images/logo.jpg";
import { Link, usePage } from "@inertiajs/react";

function HeaderDashboard() {
  const { props } = usePage();
  const user = props.auth?.user;
  const [searchActive, setSearchActive] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    router.post('/logout');
  }

  return (
    <header
      className="navbar navbar-expand-md sticky-top navbar-dashboard"
      data-bs-theme="dark"
    >
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link href="/" className="d-inline-block w-auto text-decoration-none">
          <img className="logo d-block mw-50 h-auto" src={Logo} alt="Logo" />
        </Link>
        <Link href="/" className="text-black text-decoration-none ms-3">
          <h1>CarCrashers</h1>
        </Link>

        {/* Buscador Desktop 
        <div className="navbar-search d-none d-md-flex flex-grow-1 mx-4">
          <div className="input-group input-group-sm" style={{ maxWidth: '400px' }}>
            <span className="input-group-text bg-light border-0 rounded-start">
              <i className="bi bi-search"></i>
            </span>
            <input
              className="form-control border-0 rounded-end"
              type="text"
              placeholder="Bilatu..."
              aria-label="Search"
            />
          </div>
        </div>*/}

        {/* Acciones Derecha */}
        <div className="navbar-actions d-flex align-items-center gap-3">
          {/* Buscador Móvil */}
          <button
            className="btn btn-sm btn-link text-white d-md-none"
            type="button"
            onClick={() => setSearchActive(!searchActive)}
          >
            <i className="bi bi-search"></i>
          </button>

          {/* Notificaciones */}
          <div className="dropdown">
            <button
              className="btn btn-sm btn-link text-white position-relative"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-bell fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge badge-danger badge-counter">
                3
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
              <li><h6 className="dropdown-header">Notificaciones</h6></li>
              <li><a className="dropdown-item" href="#">Nueva solicitud de peritación</a></li>
              <li><a className="dropdown-item" href="#">Stock bajo: Motor 2.0 TDI</a></li>
              <li><a className="dropdown-item" href="#">Vehículo listo para venta</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item text-center small" href="#">Ver todas</a></li>
            </ul>
          </div>

          {/* Usuario */}
          <div className="dropdown">
            <button
              className="btn btn-sm btn-link text-white d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="dropdown"
            >
              <div className="avatar-small bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <span className="text-white fw-bold">{user?.name?.charAt(0)}</span>
              </div>
              <span className="d-none d-md-inline text-white">{user?.name}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
              <li><h6 className="dropdown-header">{user?.email}</h6></li>
              <li><a className="dropdown-item text-danger" onclick={handleLogout} href="#"><i className="bi bi-door-closed me-2"></i>Cerrar sesión</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Buscador Mobile Expandido */}
      {searchActive && (
        <div className="container-fluid px-4 py-2 d-md-none border-top border-secondary">
          <div className="input-group input-group-sm">
            <span className="input-group-text bg-light border-0 rounded-start">
              <i className="bi bi-search"></i>
            </span>
            <input
              className="form-control border-0 rounded-end"
              type="text"
              placeholder="Bilatu..."
              aria-label="Search"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderDashboard;
