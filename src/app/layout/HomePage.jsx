"use client";

import React, { useRef, useEffect, useState } from "react";

// ---- PROJEKT ----
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

// ---- KORT ----
const ProjectCard = ({ project, onClick }) => (
  <div
    className="w-full h-80 max-w-md mx-auto group [perspective:1000px] cursor-pointer"
    onClick={() => onClick(project)}
  >
    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* Front */}
      <div className="absolute inset-0 p-4 rounded-2xl shadow-xl [backface-visibility:hidden] bg-white dark:bg-gray-800 border-2 border-indigo-400">
        <img
          src={project.imageSrc}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
      {/* Back */}
      <div className="absolute inset-0 flex flex-col justify-center p-6 rounded-2xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] bg-indigo-50 dark:bg-gray-700 text-gray-900 dark:text-white border-2 border-indigo-300">
        <h3 className="text-2xl font-extrabold mb-2">{project.title}</h3>
        <p>{project.text}</p>
        <button className="mt-4 self-start bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full transition">
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
    { title: "Tools", items: ["Git", "GitHub", "Vercel", "Npm"] },
  ];
  const [zoomedIndex, setZoomedIndex] = useState(null);
  const handleClick = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col gap-8 mt-20 mb-20">
      <h2 className="text-5xl font-extrabold text-indigo-600">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((cat, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`
              p-8 rounded-3xl shadow-xl cursor-pointer border-2 border-indigo-300
              bg-white dark:bg-gray-800 transition-transform duration-300
              ${zoomedIndex === i ? "scale-105" : "hover:scale-105"}
            `}
          >
            <h3 className="text-3xl font-bold mb-5 text-indigo-500">
              {cat.title}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {cat.items.map((s, j) => (
                <li
                  key={j}
                  className="bg-cyan-100 dark:bg-cyan-700 text-cyan-800 dark:text-white px-4 py-2 rounded-full text-sm font-semibold shadow"
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

// ---- ANIMERING ----
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

// ---- SIDAN ----
export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleBack = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      <main className="flex flex-col p-10 max-w-7xl mx-auto">
        {/* About */}
        <AnimateOnScrollSection>
          <section className="mb-20 text-center">
            <p className="text-xl mt-5 max-w-3xl mx-auto leading-relaxed">
              Hi, my name is Mustaf. I am a frontend developer who creates web
              and mobile apps. Currently studying at Chas Academy in Stockholm.
              Motivated, curious and enjoy team work.
            </p>
          </section>
        </AnimateOnScrollSection>

        {/* Project Details */}
        {selectedProject && (
          <AnimateOnScrollSection>
            <div className="max-w-4xl w-full p-8 rounded-3xl shadow-xl bg-white dark:bg-gray-800 mb-12 mx-auto border-2 border-indigo-300">
              <button
                onClick={handleBack}
                className="mb-6 text-sm text-indigo-600 hover:underline"
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
                className="mt-6 inline-block bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 shadow transition"
              >
                Live Demo
              </a>
            </div>
          </AnimateOnScrollSection>
        )}

        {/* Projects */}
        <AnimateOnScrollSection>
          <section className="flex flex-col items-center gap-5">
            <h1 className="text-5xl font-extrabold text-indigo-600">
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
            <h1 className="text-5xl font-extrabold text-indigo-600">
              Let's Connect
            </h1>
            <a href="mailto:Mustaf.h10@outlook.com">
              <button className="bg-indigo-500 text-white px-10 py-4 rounded-full hover:bg-indigo-600 transition shadow-lg">
                Write a message
              </button>
            </a>
          </section>
        </AnimateOnScrollSection>

        {/* Reference */}
        <AnimateOnScrollSection>
          <section className="flex flex-col items-center gap-5">
            <h1 className="text-5xl font-extrabold text-indigo-600">
              Reference
            </h1>
            <div className="bg-indigo-500 dark:bg-gray-800 text-white p-8 rounded-3xl shadow-xl text-center max-w-md border-2 border-indigo-300">
              <p className="mb-2 font-semibold">
                <strong>Person:</strong> Ulf Sandström
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:ulf@sandstrom.se"
                  className="underline hover:text-white"
                >
                  ulf@sandstrom.se
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+46704888418"
                  className="underline hover:text-white"
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
