import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Styles/Gallery.css";
import vilkoNuotrauka from "./Styles/Images/wolf2.webp";

const images = [vilkoNuotrauka];

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="gallery">
      <div className="container">
        <div className="row">
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src} // Čia dabar tinkamas kelias
              alt={`Vilkas ${index + 1}`}
              className="gallery-image"
              loading="lazy"
              onClick={() => setModalImage(src)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>

      {modalImage && (
        <motion.div 
          className="modal" 
          onClick={() => setModalImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span 
            className="close"
            whileHover={{ scale: 1.2 }}
          >
            &times;
          </motion.span>
          <motion.img 
            className="modal-content" 
            src={modalImage} 
            alt="Vilkas stambiu planu"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
