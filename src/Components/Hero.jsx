import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Styles/Hero.css";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.header 
      className="header"
      style={{ backgroundPositionY: backgroundY }}
    >
      <motion.h1 
        className="header-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Wolf 2
      </motion.h1>
      <motion.a
        href="https://itunes.apple.com/us/app/wolf-2/id1384505386?ls=1&mt=12"
        className="download-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Download For Mac
      </motion.a>
    </motion.header>
  );
};

export default Header;