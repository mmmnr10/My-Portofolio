"use client";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import HomePage from "./layout/HomePage";
import HeaderLeft from "./layout/HeaderLeft";
import {useState, useEffect} from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import Footer from "@/components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Mouse tracking for background spotlight
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const background = useMotionTemplate`radial-gradient(1000px circle at ${springX}px ${springY}px, rgba(242, 166, 65, 0.05), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Hämta sparat tema från localStorage vid första renderingen
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  // Uppdatera localStorage och dokumentets klass när darkMode ändras
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className="relative min-h-screen font-sans selection:bg-amber-500 selection:text-white">
      {/* Dynamic Spotlight Background Effects */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[-1] hidden md:block" // Hidden on mobile for performance
        style={{ background }}
      />
      
      <div className="flex justify-center transition-colors duration-500">
        <div className="w-full max-w-[1744px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 py-8 lg:py-12">
            {/* Sidebar / Header Left */}
            <aside className="lg:w-1/4 xl:w-1/5 shrink-0 relative z-20">
              <HeaderLeft
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode(!darkMode)}
              />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-h-screen relative z-10">
              <HomePage />
              <Footer />
            </main>
          </div>
          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
}


{
  /* <div className="flex flex-col min-h-screen">
<div className="flex flex-col min-[1140px]:flex-row">
  <HeaderLeft
    darkMode={darkMode}
    toggleDarkMode={() => setDarkMode(!darkMode)}
  />
  <div className="min-h-screen w-full max-w-[1744px] flex flex-col">
    <HomePage />
    <Footer />
  </div>
</div>
<ScrollToTopButton />
</div> */
}
