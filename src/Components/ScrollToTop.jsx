import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / scrollHeight) * 100;
      setScrollProgress(progress);

      
      setIsVisible(progress > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-20 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      whileHover={{ scale: 1.1 }}
    >
    <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
  <circle
    className="text-gray-600"
    stroke="currentColor"
    strokeWidth="3"
    fill="transparent"
    r="16"
    cx="18"
    cy="18"
  />
  <motion.circle
    className="text-white"
    stroke="currentColor"
    strokeWidth="3"
    fill="transparent"
    r="16"
    cx="18"
    cy="18"
    strokeDasharray="100"
    strokeDashoffset={100 - (scrollProgress * 1.2)} // Dibuat lebih proporsional
    initial={{ strokeDashoffset: 100 }}
    animate={{ strokeDashoffset: 100 - (scrollProgress * 1.2) }} // Dikalikan faktor agar lebih smooth
    transition={{ ease: "linear", duration: 0.1 }} // Kurangi delay agar lebih responsif
  />
</svg>

      <FaArrowUp className="text-white text-lg relative" />
    </motion.button>
  );
};

export default ScrollToTop;
