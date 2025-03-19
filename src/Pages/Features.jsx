import React from "react";
import { motion } from "framer-motion";
import "../Components/Styles/Features.css";

const features = [
  {
    title: "Redefine drag and drop",
    icon: "glyphicon-tasks",
    text: "Packed with all the features you need for amazing websites, all you have to do is drag & drop."
  },
  {
    title: "Beautiful and responsive",
    icon: "glyphicon-phone",
    text: "Integrated with the powerful Bootstrap Framework, Wolf generates layouts that work beautifully on all devices."
  },
  {
    title: "Build websites and web forms",
    icon: "glyphicon-heart-empty",
    text: "Build mobile-friendly websites and interactive web forms with multiple fields and reCAPTCHA."
  }
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <h2>{feature.title}</h2>
              <span className={`glyphicon ${feature.icon}`} style={{ fontSize: "3em" }}></span>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;