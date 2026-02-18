import Header from "../ui/header";
import Footer from "../ui/footer/footer";
import NavBar from "../ui/navBar/navBar";
import Saioa from "../ui/saioa/saioa.jsx";
import React from "react";
import "./layout.css";

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <React.StrictMode>
          <Header />  
          <NavBar />
      </React.StrictMode>

      {children}

      <React.StrictMode>
          <Footer />
      </React.StrictMode>

      {/* Modal de inicio de sesión - Global */}
      <Saioa />
    </div>
  );
}

export default Layout;
