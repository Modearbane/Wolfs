import React from "react";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li><a href="#login">Login</a></li>
          <li><a href="#register">Register</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
