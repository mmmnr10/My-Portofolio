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
    <div className="flex justify-center duration-1000 overflow-x-hidden">
      <div className="w-full max-w-[1744px]">
        <div className="flex-1 flex-col min-h-screen">
          <div className="flex flex-col min-[1140px]:flex-row">
            <HeaderLeft
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode(!darkMode)}
            />
            <div className="min-h-screen flex flex-col">
              <HomePage />
              <Footer />
            </div>
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
