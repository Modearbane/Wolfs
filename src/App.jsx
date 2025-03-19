import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import BackToTop from "./Components/BackToTop";
import BackgroundMusic from "./Components/Backgroundmusic";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";  // ✅ Patikriname, ar kelias teisingas
import About from "./Pages/About";
import Features from "./Pages/Features";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Login from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";
import "./app.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <BackToTop />
      <BackgroundMusic />

      <Routes>
        <Route path="/" element={<Hero />} /> {/* ✅ Hero kaip pagrindinis puslapis */}
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
