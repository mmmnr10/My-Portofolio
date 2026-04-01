import React, { useState } from "react";
import { IoLocationOutline, IoCallOutline, IoMoon } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { VscGithubAlt } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass p-8 sticky top-8 rounded-[2rem] shadow-2xl overflow-hidden border border-white/20 dark:border-white/10"
    >
      {/* Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex flex-col gap-8 relative z-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="relative group w-full px-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-amber-400 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              src="/Mustaf.jpeg"
              alt="Mustaf portrait"
              className="relative w-full aspect-[4/5] rounded-[2.5rem] object-cover border border-white/20 dark:border-white/10 shadow-2xl floating"
            />
          </div>


          <div className="space-y-2">
            <h1 className="text-3xl font-outfit font-bold tracking-tight text-white">
              Mustaf <span className="text-amber-500">A</span>
            </h1>
            <div className="flex flex-col items-center gap-2">
              <p className="px-4 py-1.5 bg-amber-500/10 text-amber-500 rounded-full text-sm font-medium inline-block">
                Web & Mobile Developer
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open for Work
              </motion.div>
            </div>
          </div>


          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="p-3 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 rounded-2xl shadow-sm border border-black/5 dark:border-white/5 transition-colors absolute top-0 right-0 group"
          >
            {darkMode ? <LuSun className="text-xl text-yellow-500" /> : <IoMoon className="text-xl text-indigo-600" />}
          </motion.button>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 pt-4 border-t border-black/5 dark:border-white/5">
          <ContactItem icon={<IoLocationOutline />} text="Stockholm" />
          
          <div className="relative">
            <button
              onClick={handleCopyEmail}
              onMouseEnter={() => setShowTooltipEmail(true)}
              onMouseLeave={() => setShowTooltipEmail(false)}
              className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 transition-all text-gray-300 group"
            >
              <MdOutlineEmail className="text-2xl text-amber-500" />
              <span className="text-sm truncate font-medium">mustaf.h10@outlook.com</span>
            </button>
            <AnimatePresence>
              {showTooltipEmail && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 -top-10 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-50 shadow-xl"
                >
                  Klicka för att kopiera
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <a href="tel:0762665179" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 transition-all text-gray-300 group">
            <IoCallOutline className="text-2xl text-amber-400" />
            <span className="text-sm font-medium">0762665179</span>
          </a>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1">Social</h2>
          <motion.a
            whileHover={{ x: 5 }}
            href="https://github.com/mmmnr10"
            target="_blank"
            className="flex items-center gap-3 p-3 rounded-2xl bg-amber-500 text-black shadow-lg hover:shadow-amber-500/20 transition-all group"
          >
            <VscGithubAlt className="text-2xl" />
            <span className="text-sm font-bold">GitHub</span>
          </motion.a>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1">Utbildning</h2>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:to-transparent">
                <h4 className="text-sm font-bold text-white leading-tight">{item.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{item.school}</p>
                <span className="text-[10px] font-bold text-amber-500 mt-1 block uppercase tracking-wider">{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="space-y-4 pb-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1">Hobbys</h2>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:border-amber-500 transition-colors"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="pt-6 border-t border-black/5 dark:border-white/5">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1 mb-4">Språk</h2>
          <div className="space-y-3">
            <LanguageProgress label="Svenska" progress="w-full" />
            <LanguageProgress label="Engelska" progress="w-11/12" />
            <LanguageProgress label="Somali" progress="w-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-2xl text-gray-300">
      <span className="text-2xl text-amber-500">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function LanguageProgress({ label, progress }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        <span>{label}</span>
      </div>
      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          className={`h-full bg-gradient-to-r from-amber-600 to-amber-400 ${progress}`}
        />
      </div>
    </div>
  );
}

