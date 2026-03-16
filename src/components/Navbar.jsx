"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="flex justify-between items-center min-h-17 w-full p-4 bg-white dark:bg-[#1a1a1a] border-b border-[var(--border-color)]">

      <button className="text-3xl relative z-50 text-gray-800 dark:text-gray-200" onClick={handleMenu}>
        {isOpen ? "" : <RxHamburgerMenu />}
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-52 bg-white dark:bg-[#242424] shadow-lg p-4 
                    flex flex-col items-center space-y-6 text-lg duration-300 ease-in-out transform 
                    border-l border-[var(--border-color)]
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end text-3xl w-full text-gray-800 dark:text-gray-200">
          <button onClick={handleMenu}>
            <TfiClose />
          </button>
        </div>

        <Link href="/">Project</Link>
        <Link href="/">Skills</Link>
        <Link href="/">About</Link>
      </div>
    </nav>
  );
}
