import React from "react";
import { motion } from "framer-motion";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-content">
        <motion.span 
          className="glyphicon glyphicon-heart-empty" 
          style={{ fontSize: "3em" }}
          whileHover={{ scale: 1.2 }}
        ></motion.span>
        <p>Proudly made with Wolf</p>
        <p>
          <a href="https://www.aidaluu.com/CompareWebsiteDesignSoftware.html">
            Compare Web Design Apps
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
