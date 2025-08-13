import React from "react";
import {IoLocationOutline, IoCallOutline} from "react-icons/io5";
import {MdOutlineEmail} from "react-icons/md";
import {LuSun, LuMoon} from "react-icons/lu";
import {CiLinkedin} from "react-icons/ci";
import {VscGithubAlt} from "react-icons/vsc";
import {SiReaddotcv} from "react-icons/si";
import {useState} from "react";
import {motion} from "framer-motion";
import {IoMoon} from "react-icons/io5";

const hobbies = [
  "Brazilian Jiu-Jitsu",
  "Climbing",
  "Gaming",
  "Music",
  "Programming",
  "Nature",
  "Sports",
];

const education = [
  {
    title: "Frontend Developer",
    school: "Chas Academy",
    year: "2024-",
  },
  {
    title: "Webb Utveckling",
    school: "Åsö Gymnasium",
    year: "2023",
  },
  {
    title: "Programering 1 (Javascript)",
    school: "Åsö Gymnasium",
    year: "2023",
  },
];

export default function HeaderLeft({darkMode, toggleDarkMode}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [showTooltip3, setShowTooltip3] = useState(false);

  function handleCopyEmail() {
    const email = "daniel.tilleria@hotmail.com";
    navigator.clipboard.writeText(email);
  }

  function handleDownload() {
    const link = document.createElement("a"); // skapar en länk
    link.href = "/DanielTilleria.pdf"; // sätter länken till CV:et
    link.download = "Daniel Tilleria.pdf"; // sätter namnet på filen som ska laddas ner
    link.click();
  }

  return (
    <motion.div
      initial={{opacity: 0, x: -20}}
      animate={{opacity: 1, x: 0}}
      transition={{delay: 0.2, duration: 0.8}}
      className="flex-1 min-h-screen p-10 relative lg:border-r "
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="perspective-3d">
            <img
              src="/me.jpeg"
              alt="It's me Daniel"
              className="w-auto h-48 rounded-full object-cover border-4 float"
            />
          </div>

          <div className="text-center space-y-1">
            <h1 className="text-4xl font-extralight">
              Daniel <span className="font-semibold">Tilleria</span>
            </h1>
            <h3 className="text-lg">Web Developer</h3>
          </div>
          <motion.button
            whileTap={{scale: 0.6}}
            className="absolute top-10 right-10"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <LuSun className="text-2xl text-cyan-300" />
            ) : (
              <IoMoon className="text-2xl" />
            )}
          </motion.button>
        </div>
        {/* Contact */}
        <div className=" flex flex-col items-start justify-start border-b p-5">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <IoLocationOutline className="text-2xl" />
              <span className="text-lg">Stockholm</span>
            </li>
            {showTooltip && (
              <div
                className="bg-[var(--hover-color) absolute top-95 left-72 px-2 bg-black text-white rounded-sm after:absolute after:-translate-x-2 after:bottom-[-2px] after:left-1 after:rotate-50
                after:border-x-6 after:border-t-8 after:border-transparent after:border-t-black"
              >
                <span className="text-sm">Click to copy</span>
              </div>
            )}
            <motion.li
              whileHover={{
                y: -2,
                scale: 1.05,
                transition: {type: "spring", stiffness: 300, damping: 10},
              }}
              className="flex items-center gap-2"
            >
              <button
                onClick={handleCopyEmail}
                className="text-lg flex items-center gap-2"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                {" "}
                <MdOutlineEmail className="text-2xl " />
                daniel.tilleria@hotmail.com
              </button>
            </motion.li>
            {showTooltip3 && (
              <div
                className="bg-[var(--hover-color) absolute top-109 left-57 px-2 bg-black text-white rounded-sm after:absolute after:-translate-x-2 after:bottom-[-2px] after:left-1 after:rotate-50
                after:border-x-6 after:border-t-8 after:border-transparent after:border-t-black "
              >
                <span className="text-sm">Click to call</span>
              </div>
            )}
            <motion.li
              whileHover={{
                y: -2,
                scale: 1.05,
                transition: {type: "spring", stiffness: 300, damping: 10},
              }}
              className="flex items-center gap-2"
              onMouseEnter={() => setShowTooltip3(true)}
              onMouseLeave={() => setShowTooltip3(false)}
            >
              <IoCallOutline className="text-2xl" />
              <a href="tel:0760784669" className="text-lg">
                076 078 46 69
              </a>
            </motion.li>{" "}
            {showTooltip2 && (
              <div
                className="bg-[var(--hover-color) absolute top-121  left-35 px-2 bg-black text-white rounded-sm after:absolute after:-translate-x-2 after:bottom-[-2px] after:left-1 after:rotate-50
                after:border-x-6 after:border-t-8 after:border-transparent after:border-t-black "
              >
                <span className="text-sm">Click to download</span>
              </div>
            )}
            <motion.li
              whileHover={{
                y: -2, // Rörelse uppåt vid hover
                scale: 1.05, // Gör länken lite större
                transition: {type: "spring", stiffness: 300, damping: 10},
              }}
              className="flex items-center gap-2"
            >
              <button
                onClick={handleDownload}
                onMouseEnter={() => setShowTooltip2(true)}
                onMouseLeave={() => setShowTooltip2(false)}
                className="text-lg flex items-center"
              >
                <SiReaddotcv className="text-2xl m-2" />
                <span className="text-xl">CV</span>
              </button>
            </motion.li>
          </ul>
        </div>
        {/* Social */}

        <motion.div
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.2, duration: 0.8}}
          className="flex flex-col items-start justify-start border-b p-5 gap-5"
        >
          <h1 className="font-semibold text-2xl ">SOCIAL</h1>

          <ul className="space-y-3">
            <motion.li
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.2, duration: 0.8}}
              whileHover={{
                y: -2, // Rörelse uppåt vid hover
                scale: 1.05, // Gör länken lite större
                transition: {type: "spring", stiffness: 300, damping: 10},
              }}
              className="flex items-center gap-2"
            >
              <VscGithubAlt className="text-2xl" />
              <a
                href="https://github.com/Dantilldev"
                target="_blank"
                title="GitHub"
                className="text-lg"
              >
                GitHub
              </a>
            </motion.li>
            <motion.li
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.2, duration: 0.8}}
              whileHover={{
                y: -2, // Rörelse uppåt vid hover
                scale: 1.05, // Gör länken lite större
                transition: {type: "spring", stiffness: 300, damping: 10}, // Justera transitionen för mer "bounce"
              }}
              className="flex items-center gap-2"
            >
              <CiLinkedin className="text-2xl" />
              <a
                href="https://www.linkedin.com/in/daniel-tilleria-17a0b9259/"
                target="_blank"
                title="Linkedin"
                className="text-lg"
              >
                Linkedin
              </a>
            </motion.li>
          </ul>
        </motion.div>
        {/* Education */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 ">
          <h1 className="font-semibold text-2xl">EDUCATION</h1>
          <ul className="flex flex-col gap-5">
            {education.map((item, index) => (
              <motion.li
                key={index}
                className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:transform before:bg-[var(--text-color)]"
                initial={{opacity: 0, x: -20}} // Initial position
                animate={{opacity: 1, x: 0}} // Animate to final position
                transition={{delay: index * 0.2, duration: 0.8}} // Delay
              >
                <span className="font-semibold md:text-lg">{item.title}</span>
                <span className="font-light">{item.school}</span>
                <span className="text-sm">{item.year}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hobbies */}
        <div className="flex flex-col items-start justify-start p-5 gap-5 border-b">
          <h1 className="font-semibold text-2xl">HOBBIES</h1>
          <ul className="flex flex-wrap gap-2">
            {hobbies.map((hobby, index) => (
              <li key={index} className="flex items-center px-2 rounded-xl">
                {hobby}
              </li>
            ))}
          </ul>
        </div>
        {/* Languages */}
        <div className="flex flex-col items-start justify-start border-b p-5 gap-5">
          <h1 className="font-semibold text-2xl">LANGUAGES</h1>
          <ul className=" flex flex-col list-disc list-inside gap-2">
            <li>Swedish</li>
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
