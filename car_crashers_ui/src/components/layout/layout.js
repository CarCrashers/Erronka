//import React from "react";
import Logo from "../../assets/images/logo.jpg";
import NavBar from "../navBar.js";
import React from "react";
import "./layout.css";

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="p-3 px-5 mb-4 header-orange d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex d-row align-items-center justify-content-around">
          <a href="index.html">
            <img className="logo" src={Logo} alt="Logo"></img>
          </a>
          <a className="navbar-brand" href="#"><h1>CarCrashers</h1></a>
          {/* ¿Aqui el nombre? O solo en el navBar*/}
        </div>
        <React.StrictMode>
          <NavBar />
        </React.StrictMode>
      </header>

      <main className="flex-fill" style={{ padding: "1rem" }}>{children}</main>

      <footer className="d-flex flex-wrap justify-content-between align-items-center px-5 my-4 border-top">
        {" "}
        <div className="col-md-4 d-flex align-items-center">
          {" "}
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
          {" "}
            <img className="h-50" src={Logo} alt="Logo"></img>
            {" "}
          </a>
          {" "}
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2025 CarCrashers
          </span>
          {" "}
        </div>
        {" "}
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {" "}
          <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          {" "}
          <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Facebook">
              <i class="bi bi-twitter-x"></i>
            </a>
          </li>
          {" "}
          <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Facebook">
              <i class="bi bi-github"></i>
            </a>
          </li>
          {" "}
        </ul>
        {" "}
      </footer>
    </div>
  );
}

export default Layout;
