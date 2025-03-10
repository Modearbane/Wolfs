import React from "react";
import "./Styles/Navbar.css";
import logo from "./Styles/Public/svgWolf.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li className="nav-logo">
            <img src={logo} alt="Wolf Logo" />
          </li>
          <li><a href="#download">About</a></li>
          <li><a href="#features">Feature</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
