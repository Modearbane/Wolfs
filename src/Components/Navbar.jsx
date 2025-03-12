import React from "react";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="#download">About</a>
          </li>
          <li>
            <a href="#features">Feature</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
