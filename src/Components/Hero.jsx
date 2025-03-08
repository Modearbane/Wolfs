import React from "react";
import "./Styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Galingas svetainių kūrimo įrankis</h1>
        <p>Kurti modernias, profesionalias svetaines dar niekada nebuvo taip paprasta.</p>
        <button className="hero-button">Pradėti dabar</button>
      </div>
    </section>
  );
};

export default Hero;
