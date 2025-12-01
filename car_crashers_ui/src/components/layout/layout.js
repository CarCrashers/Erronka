//import React from "react";
import Logo from "../../assets/images/logo.jpg";
import NavBar from "../navBar.js";
import React from "react";
import "./layout.css";

function Layout({ children }) {
  return (
    <div class="row">
      <header class="text-white p-3 mb-4 header-orange d-flex flex-row justify-content-between">
        <div>
          <img class="h-50" src={Logo} alt="Logo"></img>
          {/* ¿Aqui el nombre? O solo en el navBar*/}
        </div>
        <React.StrictMode>
          <NavBar />
        </React.StrictMode>
      </header>

      <main style={{ padding: "1rem" }}>{children}</main>
      <footer class="bg-dark text-white">
        <h1>Footer</h1>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>

      </footer> 
    </div>
  );
}

export default Layout;
