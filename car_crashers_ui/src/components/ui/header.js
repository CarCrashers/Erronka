import React from "react";
import NavBar from "../ui/navBar.js";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

function header() {
  return (
    <header className="p-3 px-5 header-orange d-flex flex-row justify-content-between align-items-center">
      <div className="d-flex flex-row align-items-center">
        <Link to="/" className="d-inline-block w-auto">
          <img className="logo d-block mw-100 h-auto" src={Logo} alt="Logo" />
        </Link>
        <Link to="/" className="text-black text-decoration-none ms-3">
          <h1>CarCrashers</h1>
        </Link>
      </div>
    <React.StrictMode>
      <NavBar />
    </React.StrictMode>
</header>
  );
}

export default header;
