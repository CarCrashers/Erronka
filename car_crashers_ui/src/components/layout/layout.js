//import React from "react";
import Logo from "../../assets/images/logo.jpg";
import NavBar from "../navBar.js";
import React from "react";
import "./layout.css";

function Layout({ children }) {
  return (
    <div class="row">
      <header class="text-white p-3 mb-4 header-orange d-flex flex-row justify-content-evenly align-items-center">
        <div>
          <a href="index.html">
            <img class="h-50" src={Logo} alt="Logo"></img>
          </a>
          {/* ¿Aqui el nombre? O solo en el navBar*/}
        </div>
        <React.StrictMode>
          <NavBar />
        </React.StrictMode>
      </header>

      <main style={{ padding: "1rem" }}>{children}</main>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {" "}
        <div class="col-md-4 d-flex align-items-center">
          {" "}
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            aria-label="Bootstrap"
          >
            {" "}
            <svg
              class="bi"
              width="30"
              height="24"
              aria-hidden="true"
            ></svg>{" "}
          </a>{" "}
          <span class="mb-3 mb-md-0 text-body-secondary">
            © 2025 Company, Inc
          </span>{" "}
        </div>{" "}
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          {" "}
          <li class="ms-3">
            <a class="text-body-secondary" href="#" aria-label="Instagram">
              <svg class="bi" width="24" height="24" aria-hidden="true"></svg>
            </a>
          </li>{" "}
          <li class="ms-3">
            <a class="text-body-secondary" href="#" aria-label="Facebook">
              <svg class="bi" width="24" height="24"></svg>
            </a>
          </li>{" "}
        </ul>{" "}
      </footer>
    </div>
  );
}

export default Layout;
