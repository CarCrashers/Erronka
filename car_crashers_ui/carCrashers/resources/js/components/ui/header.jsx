import Logo from "@assets/images/logo.jpg";
import { Link, usePage } from "@inertiajs/react";
import Saioa from "./saioa/saioa.jsx";
import Weather from "./weather/weather.jsx";
import Obrak from "@assets/images/cartel-obras.png";

function Header() {
  const { props } = usePage();
  const user = props.auth?.user;

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
          <Weather />

          <button onClick={handleObraClick} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="logo d-block mw-100 h-auto" src={Obrak} alt="Obrak" />
          </button>

          <Link href="/saskia" className="d-inline-block w-auto">
            <i className="bi bi-cart obrak"></i>
          </Link>

          {user ? (
            <div className="dropdown">
              <button className="btn btn-outline-dark bg-orange dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person-circle"></i> {user.name}
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow">
                <li>
                  <Link className="dropdown-item" href="/dashboard">
                    <i className="bi bi-speedometer2 me-2"></i> Dashboard
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item text-danger" href="/logout" method="post" as="button" type="button">
                    <i className="bi bi-box-arrow-right me-2"></i> Saioa Itxi
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-outline-dark bg-orange" type="button" data-bs-toggle="modal" data-bs-target="#saioa">
              <i className="bi bi-person-circle"></i> Hasi Saioa
            </button>
          )}
        </div>
      </header>

      <Saioa />
    </>
  );
}

export default Header;
