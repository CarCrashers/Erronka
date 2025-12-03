import React from "react";
import NavBar from "../ui/navBar.js";
import Logo from "../../assets/images/logo.jpg";

function header() {
  return (
    <header className="p-3 px-5 header-orange d-flex flex-row justify-content-between align-items-center">
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
  );
}

export default header;
