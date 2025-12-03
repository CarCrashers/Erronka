import Header from "../ui/header";
import Footer from "../ui/footer";
import React from "react";
import "./layout.css";

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <React.StrictMode>
          <Header />
      </React.StrictMode>

      <main className="flex-fill">{children}</main>

      <React.StrictMode>
          <Footer />
      </React.StrictMode>
    </div>
  );
}

export default Layout;
