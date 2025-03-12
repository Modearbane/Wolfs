import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Styles/Gallery.css";

const images = ["img1", "img2", "img3", "img4", "img5", "img6"];

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="gallery">
      <div className="container">
        <div className="row">
          {images.map((className, index) => (
            <motion.div
              key={index}
              className={`gallery-item ${className}`}
              onClick={() => setModalImage(className)}
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
          <motion.div 
            className={`modal-content ${modalImage}`}
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
