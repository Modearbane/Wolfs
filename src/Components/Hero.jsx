import React from "react";
import ReactPlayer from "react-player";
import "./Styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <ReactPlayer
        url="https://www.youtube.com/shorts/_49ZJrbEuFI"
        playing={true}
        loop={true}
        muted={true}
        className="hero-video"
      />
      <div className="hero-content">
        <h1>Wolfs</h1>
        <a
          href="https://itunes.apple.com/us/app/wolf-2/id1384505386?ls=1&mt=12"
          className="hero-btn"
        >
          Download
        </a>
      </div>
    </section>
  );
};

export default Hero;
