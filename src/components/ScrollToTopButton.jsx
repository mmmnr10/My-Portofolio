"use client";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 100);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 glass rounded-2xl flex items-center justify-center text-indigo-500 shadow-2xl z-50 border border-white/20 dark:border-white/10 group"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl blur-xl group-hover:bg-indigo-500/20 transition-colors" />
          <FiArrowUp className="text-2xl relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

