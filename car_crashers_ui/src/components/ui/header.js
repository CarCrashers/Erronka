import React from "react";
import NavBar from "../ui/navBar.js";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

function header() {
  return (
    <header className="p-3 px-5 header-orange d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex d-row align-items-center justify-content-around">
            <Link to="/">
            <img className="logo" src={Logo} alt="Logo"></img>
            </Link>
            <a className="navbar-brand" href="#"><h1>CarCrashers</h1></a>
        </div>
        <React.StrictMode>
            <NavBar />
        </React.StrictMode>
    </header>
  );
}

export default header;
