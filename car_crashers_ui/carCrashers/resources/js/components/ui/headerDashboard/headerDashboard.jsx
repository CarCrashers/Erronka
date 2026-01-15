import { usePage } from "@inertiajs/react";


function HeaderDashboard() {
  return (
    <header
      className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"
      data-bs-theme="dark"
    >
      <a
        className="navbar-brand col-md-3 col-lg-2 fs-6 me-0 px-3 text-white"
        href="/"
      >
        CarCrashers
      </a>
      <p> </p>
      {/* botones solo en móvil */}
      <ul className="navbar-nav d-md-none flex-row">
        <li className="nav-item text-nowrap">
          <button
            className="nav-link px-3 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSearch"
            aria-controls="navbarSearch"
            aria-expanded="false"
            aria-label="Toggle search"
          >
            <i className="bi bi-search"></i>
          </button>
        </li>

        <li className="nav-item text-nowrap">
          <button
            className="nav-link px-3 text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>
        </li>
      </ul>

      {/* buscador: colapsable en móvil, fijo en md+ */}
      <div
        id="navbarSearch"
        className="navbar-search w-100 collapse d-md-block"
      >
        <input
          className="form-control w-100 rounded-0 border-0"
          type="text"
          placeholder="Bilatu"
          aria-label="Search"
        />
      </div>
    </header>
  );
}

export default HeaderDashboard;
