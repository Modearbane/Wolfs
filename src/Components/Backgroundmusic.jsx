import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./Styles/Public/music.mp3";
import backgroundMusic from "../Components/Styles/Public/music.mp3";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-container">
      <audio ref={audioRef} src={backgroundMusic} loop />
      <button className="music-btn" onClick={toggleMusic}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default BackgroundMusic;
