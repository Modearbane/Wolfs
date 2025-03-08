import React from "react";
import "./Styles/Features.css";

const featuresData = [
  { icon: "🚀", title: "Greitas ir efektyvus", description: "Kurti svetaines lengvai ir greitai su intuityvia sąsaja." },
  { icon: "🎨", title: "Modernus dizainas", description: "Profesionalūs šablonai ir neribotos pritaikymo galimybės." },
  { icon: "⚡", title: "Be programavimo", description: "Svetaines gali kurti kiekvienas – be kodavimo žinių!" },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Pagrindinės funkcijos</h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
