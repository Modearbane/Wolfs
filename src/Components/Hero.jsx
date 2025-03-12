import React from "react";
import ReactPlayer from "react-player";
import "./Styles/Hero.css";
import video from "../assets/wolf2video.mp4";

const Hero = () => {
  return (
    <section className="hero">
      <div className="video-wrapper">
        <ReactPlayer
          url={video}
          playing={true}
          loop={true}
          muted={true}
          controls={false}
          width="100%"
          height="100%"
          className="hero-video"
        />
      </div>

      {/* Pusiau permatomas overlay */}
      <div className="hero-overlay">
        
      </div>
        
    </section>
  );
};

export default Hero;
