import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Gallery from "./Components/Gallery";
import "./Components/Styles/Navbar.css";
import "./Components/Styles/Hero.css";
import "./Components/Styles/Features.css";
import ".//Components/Styles/Gallery.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      {/* Čia bus kitos sekcijos */}
    </div>
  );
}

export default App;
