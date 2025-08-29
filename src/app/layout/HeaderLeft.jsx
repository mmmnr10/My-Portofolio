import React, { useState } from "react";
import { IoLocationOutline, IoCallOutline, IoMoon } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { VscGithubAlt } from "react-icons/vsc";
import { motion } from "framer-motion";

const hobbies = [
  "Boxning",
  "Go-Kart",
  "Gaming",
  "Music",
  "Programming",
  "Soccer",
  "Sports",
];

const education = [
  {
    title: "Frontend Developer",
    school: "Chas Academy",
    year: "2024-2026",
  },
  {
    title: "Programmering 1",
    school: "Jensen Komvux",
    year: "2023",
  },
];

export default function HeaderLeft({ darkMode, toggleDarkMode }) {
  const [showTooltipEmail, setShowTooltipEmail] = useState(false);
  const [showTooltipCall, setShowTooltipCall] = useState(false);

  function handleCopyEmail() {
    const email = "mustaf.h10@outlook.com";
    navigator.clipboard.writeText(email);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="flex-1 min-h-screen max-w-full p-6 sm:p-10 relative lg:border-r bg-white dark:bg-gray-900"
    >
      <div className="flex flex-col gap-5 max-w-sm mx-auto sm:mx-0">
        <div className="flex flex-col items-center justify-center gap-5 relative">
          <div className="perspective-3d">
            <img
              src="/Mustaf.jpeg"
              alt="Mustaf portrait"
              className="w-auto h-48 rounded-full object-cover border-4 float"
            />
          </div>

          <div className="text-center space-y-1">
            <h1 className="text-3xl sm:text-4xl font-extralight text-gray-900 dark:text-white">
              Mustaf <span className="font-semibold">A</span>
            </h1>
            <h3 className="text-md sm:text-lg text-gray-700 dark:text-gray-300">
              Web Developer
            </h3>
          </div>

          {/* Dark Mode Toggle */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="absolute top-4 right-4 text-gray-700 dark:text-cyan-300 text-2xl cursor-pointer"
          >
            {darkMode ? <LuSun /> : <IoMoon />}
          </motion.button>
        </div>

        {/* Contact Section */}
        <div className="border-b border-gray-300 dark:border-gray-700 p-5">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <IoLocationOutline className="text-2xl" />
              <span className="text-lg">Stockholm</span>
            </li>

            <li className="relative flex items-center gap-3 cursor-pointer text-gray-800 dark:text-gray-200">
              <MdOutlineEmail className="text-2xl" />
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => setShowTooltipEmail(true)}
                onMouseLeave={() => setShowTooltipEmail(false)}
                className="text-lg focus:outline-none"
                aria-label="Copy email address"
              >
                mustaf.h10@outlook.com
              </button>

              {showTooltipEmail && (
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap select-none pointer-events-none z-10">
                  Click to copy
                </span>
              )}
            </li>

            <li
              className="relative flex items-center gap-3 text-gray-800 dark:text-gray-200 cursor-pointer"
              onMouseEnter={() => setShowTooltipCall(true)}
              onMouseLeave={() => setShowTooltipCall(false)}
            >
              <IoCallOutline className="text-2xl" />
              <a href="tel:0762665179" className="text-lg">
                0762665179
              </a>

              {showTooltipCall && (
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap select-none pointer-events-none z-10">
                  Click to call
                </span>
              )}
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="border-b border-gray-300 dark:border-gray-700 p-5 flex flex-col gap-5"
        >
          <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">
            SOCIAL
          </h2>
          <ul className="space-y-3">
            <motion.li
              whileHover={{
                y: -3,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
              className="flex items-center gap-3 text-gray-800 dark:text-gray-200 cursor-pointer"
            >
              <VscGithubAlt className="text-2xl" />
              <a
                href="https://github.com/mmmnr10"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="text-lg hover:underline"
              >
                GitHub
              </a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Education Section */}
        <div className="border-b border-gray-300 dark:border-gray-700 p-5">
          <h2 className="font-semibold text-2xl text-gray-900 dark:text-white mb-4">
            EDUCATION
          </h2>
          <ul className="flex flex-col gap-5">
            {education.map((item, index) => (
              <motion.li
                key={index}
                className="relative flex flex-col gap-1 border-l-4 border-purple-600 pl-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-white">
                  {item.title}
                </span>
                <span className="font-light text-gray-700 dark:text-gray-300">
                  {item.school}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {item.year}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hobbies Section */}
        <div className="border-b border-gray-300 dark:border-gray-700 p-5">
          <h2 className="font-semibold text-2xl text-gray-900 dark:text-white mb-4">
            HOBBIES
          </h2>
          <ul className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-200">
            {hobbies.map((hobby, index) => (
              <li
                key={index}
                className="px-3 py-1 rounded-full bg-purple-600 text-white text-sm cursor-default select-none"
              >
                {hobby}
              </li>
            ))}
          </ul>
        </div>

        {/* Languages Section */}
        <div className="p-5">
          <h2 className="font-semibold text-2xl text-gray-900 dark:text-white mb-4">
            LANGUAGES
          </h2>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-1">
            <li>Swedish</li>
            <li>English</li>
            <li>Somali</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
