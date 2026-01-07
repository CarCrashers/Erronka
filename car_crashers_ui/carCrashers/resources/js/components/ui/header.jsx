import Logo from "../../../assets/images/logo.jpg";
// import { Link } from "react-router-dom";
import Saioa from "./saioa/saioa.jsx";
import Obrak from "../../../assets/images/cartel-obras.png";

function header() {
  return (
    <>
    <header className="p-3 px-5 header-orange d-flex flex-row justify-content-between align-items-center">
      <div className="d-flex flex-row align-items-center">
        <a href="/" className="d-inline-block w-auto">
          <img className="logo d-block mw-100 h-auto" src={Logo} alt="Logo" />
        </a>
        <a href="/" className="text-black text-decoration-none ms-3">
          <h1>CarCrashers</h1>
        </a>
      </div>
      <div className="d-flex align-items-center gap-3">
        <a href="/error" className="d-inline-block w-auto">
        <img className="logo d-block mw-100 h-auto" src={Obrak} alt="Obrak" />
        </a>
        <a href="/saskia" className="d-inline-block w-auto">
        <i class="bi bi-cart obrak"></i>
        </a>
        <button className="btn btn-outline-dark bg-orange" type="button" data-bs-toggle="modal" data-bs-target="#saioa">
          <i className="bi bi-person-circle"></i> Hasi Saioa
        </button>
      </div>
    </header>
    <Saioa />
    </>
  );
}

export default header;
