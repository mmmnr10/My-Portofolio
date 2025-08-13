"use client";
import {useState, useEffect} from "react";
import {PiArrowUpThin} from "react-icons/pi";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Showing the button after 40px
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top on click
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center duration-300"
        aria-label="Scroll to top"
      >
        <PiArrowUpThin className="text-3xl" />
      </button>
    )
  );
}
