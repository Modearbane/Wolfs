import React from "react";
import "./Styles/Gallery.css";

const galleryItems = [
  { img: "https://wolf.aidaluu.com/assets/wolf-1.jpg", title: "Modernus dizainas" },
  { img: "https://wolf.aidaluu.com/assets/wolf-2.jpg", title: "Pritaikyta mobiliesiems" },
  { img: "https://wolf.aidaluu.com/assets/wolf-3.jpg", title: "Intuityvus valdymas" },
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2>Galerija</h2>
      <div className="gallery-container">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
