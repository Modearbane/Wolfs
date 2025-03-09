import React from "react";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            Wolf
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="https://itunes.apple.com/us/app/wolf-2/id1384505386?ls=1&mt=12">Download</a></li>
          <li><a href="Demo-WolfWebsiteDesignerforMac.html">Feature demos</a></li>
          <li><a href="ContactUs.html">Support</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
