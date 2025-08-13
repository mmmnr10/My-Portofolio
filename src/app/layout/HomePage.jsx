"use client";

import React from "react";
import FlipCard from "@/components/FlipCard";
import SkillsSection from "@/components/SkillSection";

const projects = [
  {
    imageSrc: "/planet1.jpg",
    title: " Chase the Rabbit🐉",
    text: "This is a snake inspired desktop game. Collect points, unlock characters, and set new records.",
    gitHubLink: "https://github.com/Dantilldev/chase-the-rabbit",
    liveLink: "https://chase-the-rabbit-yvfw.vercel.app/",
    techStack: ["HTML5", "TailwindCSS", "JavaScript", "React", "Next.js"],
  },
  {
    imageSrc: "/planet2.jpg",
    title: "Ai Translate & chatbot 🤖",
    text: "I developed two separate features with React. A translation tool and a chatbot, both powered by Gemini. The translation handles multiple language options, while the chatbot provides AI generated replies.",
    liveLink: "https://ai-translate-e3md.vercel.app/",
    techStack: ["HTML5", "TailwindCSS", "JavaScript", "React", "Next.js"],
  },

  {
    imageSrc: "/planet3.jpg",
    title: "Todo App 📋",
    text: "A simple todo app built with Vite, React, and TailwindCSS, focusing on implementing CRUD operations (Create, Read, Update, Delete).",
    gitHubLink: "https://github.com/Dantilldev/workshop-todoApp",
    liveLink: "https://workshop-todo-app.vercel.app/",
    techStack: ["Vite", "TailwindCSS", "CRUD"],
  },
  {
    imageSrc: "/planet4.jpg",
    title: "Pokémon 👾",
    text: "Built with Next.js in a team project, this Pokédex lets users explore Pokémons, search by name or ID(max1000), and bookmark favorites. I worked on the Pokémon details, front page, and contributed to the Context API for data management.",
    gitHubLink: "https://github.com/Dantilldev/chas_pokemon-main",
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

export default function HomePage() {
  return (
    <div className="min-h-screen flex-3">
      <main className=" flex flex-col p-10">
        {/* About Me */}
        <section className="flex flex-col gap-5 mb-20">
          <h1 className="text-4xl font-semibold">About Me</h1>
          <p className="text-lg ">
            A frontend developer who creates web and mobile apps with some
            backend capability. Currently studying at Chas Academy in Stockholm
            to improve my skills. I am a motivated and curious problem-solver
            who enjoys working in teams to tackle challenges and create
            solutions. When I am not coding, I practice Brazilian Jiu-Jitsu
            which helps me stay focused and motivated as I grow as a developer.
          </p>
        </section>

        {/* Skills */}
        <SkillsSection />

        {/* Projects */}
        <section className="flex flex-col justify-center items-center gap-5 mt-15 ">
          <h1 className="text-4xl font-semibold  py-2">Projects</h1>
          <div className="grid md:grid-cols-2 2xl:grid-cols-4 justify-center items-center gap-10">
            {projects.map((project, index) => (
              <FlipCard
                key={index}
                imageSrc={project.imageSrc}
                title={project.title}
                text={project.text}
                techStack={project.techStack}
                gitHubLink={project.gitHubLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </section>

        {/* CTA-Btn */}
        <div className="flex justify-center items-center mt-15 p-5">
          <section className="flex flex-col items-center gap-5 mb-10 w-[600px] p-4 ">
            <h1 className="text-4xl font-semibold py-2">Let's Connect</h1>

            <a href="mailto:daniel.tilleria@hotmail.com">
              <button className="relative border-2 py-3 px-5 h-52 w-52 rounded-full group transition-all duration-600 transform hover:scale-75">
                <span className="relative z-10">Write a message</span>
              </button>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

// bg-[#A6A28B]
