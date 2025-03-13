import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import "./Styles/Sidebar.css";
import backgroundMusic from "./Styles/Public/music.mp3";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <motion.nav
        className={`sidebar ${isOpen ? "open" : ""}`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <ul>
          <li>
            <a href="#home">Pagrindinis</a>
          </li>
          <li>
            <a href="#about">Apie</a>
          </li>
          <li>
            <a href="#features">Funkcijos</a>
          </li>
          <li>
            <a href="#gallery">Galerija</a>
          </li>
          <li>
            <a href="#contact">Kontaktai</a>
          </li>
        </ul>

        <div className="download-container">
          <a
            href="https://itunes.apple.com/us/app/wolf-2/id1384505386?ls=1&mt=12"
            className="download-btn"
          >
            Download
          </a>
        </div>
      </motion.nav>

      <div className="music-container">
        <audio ref={audioRef} src={backgroundMusic} loop />
        <button className="music-btn" onClick={toggleMusic}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
