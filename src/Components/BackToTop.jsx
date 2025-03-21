import React from "react";
import "./Styles/BackToTop.css";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const scrollToTop = () => {
    if (document.documentElement.scrollTop > 0) {
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    } else if (document.body.scrollTop > 0) {
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
    <FaArrowUp />
  </button>
  );
};

export default BackToTop;
