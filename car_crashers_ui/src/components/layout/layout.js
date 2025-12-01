//import React from "react";
import Logo from '../../assets/images/logo.jpg';

function Layout({ children }) {
  return (
    <div class="row">
      <header class="bg-dark text-white p-3 mb-4">
        <div>
          <img src={Logo} alt="Logo"></img>
          <h1>CarCrashers</h1>
          <p class="fst-italic fw-bolder">Drive more, crash less</p>
        </div>
      </header>

      <main style={{ padding: "1rem" }}>{children}</main>
    </div>
  );
}

export default Layout;
