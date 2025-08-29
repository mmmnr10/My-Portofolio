"use client";

import React, { useRef, useEffect, useState } from "react";

const projects = [
  {
    title: "Chase the Rabbit 🐉",
    text: "It's a small computer game inspired by the classic Snake game.",
    details:
      "The player collects points, can unlock new characters and try to beat records. I've built it with HTML5, TailwindCSS, JavaScript, React and Next.js.",
    imageSrc: "bild1.jpg",
    liveLink: "https://chase-the-rabbit-yvfw.vercel.app/",
    techStack: ["HTML5", "TailwindCSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Ai Translate & chatbot 🤖",
    text: "A translation tool + AI chatbot that gives smart, automatic answers.",
    details:
      "Built in React and uses Gemini AI. Tech: HTML5, TailwindCSS, JavaScript, React, Next.js, Gemini.",
    imageSrc: "bild2.jpg",
    liveLink: "https://ai-translate-e3md.vercel.app/",
    techStack: [
      "HTML5",
      "TailwindCSS",
      "JavaScript",
      "React",
      "Next.js",
      "Gemini",
    ],
  },
  {
    title: "Todo App 📋",
    text: "A simple app for tasks (CRUD).",
    details:
      "Create, read, update and delete tasks. Built with Vite, React and TailwindCSS.",
    imageSrc: "bild3.jpg",
    liveLink: "https://workshop-todo-app.vercel.app/",
    techStack: ["Vite", "React", "TailwindCSS", "CRUD"],
  },
  {
    title: "Pokémon 👾",
    text: "A Pokédex where you can search and save favorites.",
    details:
      "I worked on Pokémon details, homepage and Context API. Built with Next.js, TailwindCSS and PokemonAPI.",
    imageSrc: "bild4.jpg",
    liveLink: "https://chas-pokemon-main.vercel.app/",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "PokemonAPI",
      "Context API",
      "Routing",
    ],
  },
];

// ---- CARD ----
const ProjectCard = ({ project, onClick }) => (
  <div
    className="w-full h-80 max-w-md mx-auto group [perspective:1000px] cursor-pointer"
    onClick={() => onClick(project)}
  >
    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* Front */}
      <div className="absolute inset-0 p-4 rounded-2xl shadow-xl [backface-visibility:hidden] bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 dark:from-pink-600 dark:via-purple-700 dark:to-indigo-900">
        <img
          src={project.imageSrc}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover rounded-lg shadow-md border-4 border-white"
        />
      </div>
      {/* Back */}
      <div className="absolute inset-0 flex flex-col justify-center p-6 rounded-2xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gradient-to-br from-yellow-200 via-green-200 to-blue-200 dark:from-yellow-600 dark:via-green-700 dark:to-blue-700 text-gray-900 dark:text-gray-100">
        <h3 className="text-2xl font-extrabold mb-2 drop-shadow-md">
          {project.title}
        </h3>
        <p className="font-semibold">{project.text}</p>
        <button className="mt-4 self-start bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-semibold shadow-lg transition">
          Läs mer →
        </button>
      </div>
    </div>
  </div>
);

// ---- SKILLS ----
const SkillsSection = () => {
  const skills = [
    {
      title: "Languages",
      items: ["JavaScript", "HTML5", "CSS3", "TypeScript"],
    },
    {
      title: "Frameworks",
      items: ["React", "Next.js", "Vite", "TailwindCSS", "React Native"],
    },
    { title: "Backend", items: ["API", "Databases"] },
    { title: "Tools", items: ["Git", "GitHub", "Vercel", "npm"] },
  ];

  // State to track which card(s) are zoomed in
  // För enkelhetens skull bara en i taget zoomad in:
  const [zoomedIndex, setZoomedIndex] = useState(null);

  // Hantera klick på card: toggle zoom
  const handleClick = (index) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null); // zooma ut om klickar på samma igen
    } else {
      setZoomedIndex(index); // zooma in på klickad
    }
  };

  return (
    <section className="flex flex-col gap-8 mt-20 mb-20">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((cat, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(i);
              }
            }}
            tabIndex={0}
            role="button"
            aria-pressed={zoomedIndex === i}
            className={`
              p-8 rounded-3xl shadow-2xl cursor-pointer
              bg-gradient-to-tr from-white to-indigo-50
              dark:from-gray-700 dark:to-gray-900
              transform transition-transform duration-300 ease-in-out
              focus:outline-none focus:ring-4 focus:ring-indigo-400
              ${zoomedIndex === i ? "scale-105" : "hover:scale-105"}
            `}
          >
            <h3 className="text-3xl font-bold mb-5 text-indigo-700 dark:text-indigo-300">
              {cat.title}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {cat.items.map((s, j) => (
                <li
                  key={j}
                  className="bg-indigo-200 dark:bg-indigo-600 text-indigo-900 dark:text-indigo-100 px-4 py-2 rounded-full text-base font-semibold shadow"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

// ---- ANIMATION ----
const AnimateOnScrollSection = ({ children, className }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${className} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// ---- PAGE ----
export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleBack = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 font-sans">
      <main className="flex flex-col p-10 max-w-7xl mx-auto">
        {/* About Me */}
        <AnimateOnScrollSection>
          <section className="mb-20 text-center">
            <p className="text-xl mt-5 max-w-3xl mx-auto leading-relaxed">
              Hi, my name is Mustaf. I am a frontend developer who creates web
              and mobile apps. Currently studying at Chas Academy in Stockholm.
              Motivated, curious and enjoy team work.
            </p>
          </section>
        </AnimateOnScrollSection>

        {/* Project details */}
        {selectedProject && (
          <AnimateOnScrollSection>
            <div className="max-w-4xl w-full p-8 rounded-3xl shadow-2xl bg-white dark:bg-gray-800 mb-12 mx-auto">
              <button
                onClick={handleBack}
                className="mb-6 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                ← Back
              </button>
              <h2 className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <p>{selectedProject.details}</p>
              <h3 className="mt-6 font-semibold">Tech stack:</h3>
              <ul className="list-disc ml-6 mt-2">
                {selectedProject.techStack.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 shadow-lg transition"
              >
                Live Demo
              </a>
            </div>
          </AnimateOnScrollSection>
        )}

        {/* Projects */}
        <AnimateOnScrollSection>
          <section className="flex flex-col items-center gap-5">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700">
              Projects
            </h1>
            <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-10 mt-6 w-full">
              {projects.map((p, i) => (
                <ProjectCard key={i} project={p} onClick={setSelectedProject} />
              ))}
            </div>
          </section>
        </AnimateOnScrollSection>

        {/* Skills */}
        <AnimateOnScrollSection>
          <SkillsSection />
        </AnimateOnScrollSection>

        {/* Connect */}
        <AnimateOnScrollSection>
          <section className="flex flex-col items-center gap-5 mb-10">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700">
              Let's Connect
            </h1>
            <a href="mailto:Mustaf.h10@outlook.com">
              <button className="bg-indigo-600 text-white px-10 py-4 rounded-full hover:bg-indigo-700 transition shadow-lg">
                Write a message
              </button>
            </a>
          </section>
        </AnimateOnScrollSection>

        {/* Reference */}
        <AnimateOnScrollSection>
          <section className="flex flex-col items-center gap-5">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700">
              Reference
            </h1>
            <div className="bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 p-8 rounded-3xl shadow-xl text-center max-w-md">
              <p className="mb-2 font-semibold text-indigo-900 dark:text-indigo-200">
                <strong>Person:</strong> Ulf Sandström
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:ulf@sandstrom.se"
                  className="underline text-indigo-700 dark:text-indigo-300"
                >
                  ulf@sandstrom.se
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+46704888418"
                  className="underline text-indigo-700 dark:text-indigo-300"
                >
                  070-488 84 18
                </a>
              </p>
            </div>
          </section>
        </AnimateOnScrollSection>
      </main>
    </div>
  );
}
