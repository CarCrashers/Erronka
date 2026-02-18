import { useState } from "react";
import './headerDashboard.css';
import Logo from "@assets/images/logo.jpg";
import { Link, usePage, router } from "@inertiajs/react"; // Añadido router para logout

function HeaderDashboard() {
  const { props } = usePage();
  const user = props.auth?.user;
  const [searchActive, setSearchActive] = useState(false);

  return (
    <header className="navbar navbar-expand-md sticky-top navbar-dashboard" style={{ minHeight: '70px' }}>
      <div className="container-fluid px-4">
        {/* Logo y Título */}
        <div className="d-flex align-items-center">
            <Link href="/" className="d-inline-block text-decoration-none" style={{ marginRight: '0.75rem' }}>
                <img className="logo" src={Logo} alt="Logo" />
            </Link>
            <Link href="/" className="text-black text-decoration-none">
                <h1 className="m-0">CarCrashers</h1>
            </Link>
        </div>

        {/* Acciones Derecha */}
        <div className="navbar-actions d-flex align-items-center gap-3">
          <button
            className="btn btn-sm btn-link text-dark d-md-none"
            type="button"
            onClick={() => setSearchActive(!searchActive)}
          >
            <i className="bi bi-search"></i>
          </button>

          {/*Erabiltzailearen Dropdown Menua*/}
          <div className="dropdown" style={{ zIndex: 9999, position: 'relative' }}>
            <button
              className="user-dropdown-btn d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="avatar-wrapper">
                <div className="avatar-circle">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <span className="status-indicator"></span>
              </div>
              <div className="user-info-text d-none d-md-block text-start">
                <span className="user-name">{user?.name}</span>
                <span className="user-role">{user?.mota || 'Erabiltzailea'}</span>
              </div>
              <i className="bi bi-chevron-down small-icon text-dark"></i>
            </button>

            <ul className="dropdown-menu dropdown-menu-end custom-dropdown shadow mt-2 border-0">
              <li className="px-3 py-2 border-bottom mb-2">
                <p className="mb-0 small text-muted">Saioa hasita:</p>
                <p className="mb-0 fw-bold truncate-email text-dark">{user?.email}</p>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2" href="/">
                  <i className="bi bi-house"></i> Hasiera
                </Link>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2" href="/profile">
                  <i className="bi bi-person"></i> Nire Profila
                </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <Link 
                  className="dropdown-item d-flex align-items-center gap-2 text-danger fw-semibold" 
                  href="/logout" 
                  method="post" 
                  as="button"
                >
                  <i className="bi bi-door-closed"></i> Saioa itxi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Buscador Mobile */}
      {searchActive && (
        <div className="container-fluid px-4 py-2 d-md-none border-top border-secondary bg-white">
          <div className="input-group input-group-sm">
            <span className="input-group-text bg-light border-0">
              <i className="bi bi-search"></i>
            </span>
            <input className="form-control border-0" type="text" placeholder="Bilatu..." />
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderDashboard;