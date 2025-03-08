import React from "react";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Wolf. Visos teisės saugomos.</p>
        <nav>
          <ul>
            <li><a href="#features">Funkcijos</a></li>
            <li><a href="#gallery">Galerija</a></li>
            <li><a href="#">Privatumo politika</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
