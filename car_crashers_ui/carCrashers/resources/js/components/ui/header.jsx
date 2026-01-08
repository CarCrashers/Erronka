import Logo from "@assets/images/logo.jpg";
import { Link } from "@inertiajs/react";
import Saioa from "./saioa/saioa.jsx";
import Obrak from "@assets/images/cartel-obras.png";

function Header() {
  const handleObraClick = () => {
    window.location.href = '/error';
  };

  return (
    <>
      <header className="p-3 px-5 orange d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-row align-items-center">
          <Link href="/" className="d-inline-block w-auto text-decoration-none">
            <img className="logo d-block mw-100 h-auto" src={Logo} alt="Logo" />
          </Link>
          <Link href="/" className="text-black text-decoration-none ms-3">
            <h1>CarCrashers</h1>
          </Link>
        </div>
        <div className="d-flex align-items-center gap-3">
          <button onClick={handleObraClick} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="logo d-block mw-100 h-auto" src={Obrak} alt="Obrak" />
          </button>
          <Link href="/saskia" className="d-inline-block w-auto">
            <i className="bi bi-cart obrak"></i>
          </Link>
          <button className="btn btn-outline-dark bg-orange" type="button" data-bs-toggle="modal" data-bs-target="#saioa">
            <i className="bi bi-person-circle"></i> Hasi Saioa
          </button>
        </div>
      </header>
      <Saioa />
    </>
  );
}

export default Header;
