import React from "react";
import Features from "../Pages/Features";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import Footer from "../Pages/Footer";
import "../Components/Styles/Hero.css";
import videoFile from "../assets/wolf2video.mp4";

const Hero = () => {
  return (
    <div className="hero">
      {/* Video fono sekcija */}
      <div className="video-wrapper">
        <video autoPlay loop muted playsInline>
          <source src={videoFile} type="video/mp4" />
          Jūsų naršyklė nepalaiko vaizdo įrašų.
        </video>
      </div>

      {/* Pusiau permatomas fonas ant video */}
      <div className="hero-overlay"></div>

      {/* Hero turinys */}
      <div className="hero-content">
        <h1>Wolf 2</h1>
        <p>Next-level website builder</p>
      </div>

      {/* Kitos puslapio sekcijos */}
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Hero;
