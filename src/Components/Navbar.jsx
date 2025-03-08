import React from "react";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Wolf</div>
      <ul className="nav-links">
        <li><a href="#features">Funkcijos</a></li>
        <li><a href="#gallery">Galerija</a></li>
        <li><a href="#contact">Kontaktai</a></li>
      </ul>
      <button className="nav-button">Atsisiųsti</button>
    </nav>
  );
};

export default Navbar;
