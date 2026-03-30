"use client";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import HomePage from "./layout/HomePage";
import HeaderLeft from "./layout/HeaderLeft";
import {useState, useEffect} from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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
    <div className="relative min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background Effects */}
      <div className="mesh-bg opacity-50 dark:opacity-30 pointer-events-none" />
      
      <div className="flex justify-center transition-colors duration-500">
        <div className="w-full max-w-[1744px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 py-8 lg:py-12">
            {/* Sidebar / Header Left */}
            <aside className="lg:w-1/4 xl:w-1/5 shrink-0">
              <HeaderLeft
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode(!darkMode)}
              />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-h-screen">
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
