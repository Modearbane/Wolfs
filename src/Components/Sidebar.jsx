import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Meniu aktyvavimo mygtukas */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Šoninis meniu */}
      <motion.nav
        className={`sidebar ${isOpen ? "open" : ""}`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <ul>
          <li><a href="#home">Pagrindinis</a></li>
          <li><a href="#about">Apie</a></li>
          <li><a href="#features">Funkcijos</a></li>
          <li 
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span>Daugiau ▼</span>
            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <li><a href="#gallery">Galerija</a></li>
              <li><a href="#team">Komanda</a></li>
              <li><a href="#contact">Kontaktai</a></li>
            </ul>
          </li>
        </ul>

        {/* "Download" mygtukas šoniniame meniu */}
        <div className="download-container">
          <a
            href="https://itunes.apple.com/us/app/wolf-2/id1384505386?ls=1&mt=12"
            className="download-btn"
          >
            Download
          </a>
        </div>
      </motion.nav>
    </>
  );
};

export default Sidebar;
