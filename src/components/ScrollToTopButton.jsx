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
          className="fixed bottom-8 right-8 w-14 h-14 glass rounded-2xl flex items-center justify-center text-[#f2a641] shadow-[0_0_20px_rgba(242,166,65,0.1)] hover:shadow-[0_0_40px_rgba(242,166,65,0.4)] z-50 border border-white/20 group hover:border-[#f2a641]/50 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 bg-[#f2a641]/10 rounded-2xl blur-xl group-hover:bg-[#f2a641]/20 transition-colors" />
          <FiArrowUp className="text-2xl relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

