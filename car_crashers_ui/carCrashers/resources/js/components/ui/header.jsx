import { useEffect } from "react";
import Logo from "@assets/images/logo.jpg";
import { Link, usePage } from "@inertiajs/react";
import Weather from "./weather/weather.jsx";
import BerifikatuBanner from './berifikatuBanner/berifikatuBanner.jsx';
import Obrak from "@assets/images/cartel-obras.png";

function Header() {
  const { props } = usePage();
  const user = props.auth?.user;

  const handleObraClick = () => {
    window.location.href = '/error';
  };
  useEffect(() => {
    const obtenerUbicacion = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
              timestamp: new Date().getTime(),
            };
            localStorage.setItem("user_location", JSON.stringify(coords));
          },
          (error) => console.warn("Ubicación denegada")
        );
      }
    };

    obtenerUbicacion();
  }, []);

  return (
    <>
      <header className="orange d-flex flex-row justify-content-between align-items-center p-2 p-md-3 px-md-5 sticky-top">
        <div className="d-flex flex-row align-items-center gap-2 gap-md-3">
          <Link href="/" className="d-inline-block text-decoration-none">
            <img className="logo d-block mw-100" style={{ height: '50px', width: 'auto' }} src={Logo} alt="Logo" />
          </Link>
          <Link href="/" className="text-black text-decoration-none d-none d-md-block">
            <h1 className="h4 h-md-1 m-0">CarCrashers</h1>
          </Link>
        </div>

        <div className="d-flex align-items-center gap-2 gap-md-3">
          <div className="d-none d-lg-block">
            <Weather />
          </div>

          <button onClick={handleObraClick} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} className="d-none d-md-block">
            <img className="logo d-block mw-100" style={{ height: '40px', width: 'auto' }} src={Obrak} alt="Obrak" />
          </button>

          <Link href="/saskia" className="d-inline-block position-relative">
            <i className="bi bi-cart obrak fs-5"></i>
          </Link>

          {user ? (
            <div className="dropdown">
              <button className="btn btn-outline-dark bg-orange dropdown-toggle btn-sm py-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person-circle"></i>
                <span className="d-none d-sm-inline ms-1">{user.name}</span>
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
            <button className="btn btn-outline-dark bg-orange btn-sm py-1" type="button" data-bs-toggle="modal" data-bs-target="#saioa">
              <i className="bi bi-person-circle"></i>
              <span className="d-none d-sm-inline ms-1">Hasi</span>
            </button>
          )}
        </div>
      </header>
      <BerifikatuBanner />
    </>
  );
}

export default Header;
