"use client";

import React from "react";
import FlipCard from "@/components/FlipCard";
import SkillsSection from "@/components/SkillSection";

const projects = [
  {
    imageSrc: "/bild1.jpg",
    title: "Chase the Rabbit🐉",
    text: "This is a snake inspired desktop game. Collect points, unlock characters, and set new records.",
    liveLink: "https://chase-the-rabbit-yvfw.vercel.app/",
    techStack: ["HTML5", "TailwindCSS", "JavaScript", "React", "Next.js"],
  },
  {
    imageSrc: "/bild2.jpg",
    title: "Ai Translate & chatbot 🤖",
    text: "I developed two separate features with React. A translation tool and a chatbot, both powered by Gemini.",
    liveLink: "https://ai-translate-e3md.vercel.app/",
    techStack: ["HTML5", "TailwindCSS", "JavaScript", "React", "Next.js"],
  },
  {
    imageSrc: "/bild3.jpg",
    title: "Todo App 📋",
    text: "A simple todo app built with Vite, React, and TailwindCSS, focusing on implementing CRUD operations.",
    liveLink: "https://workshop-todo-app.vercel.app/",
    techStack: ["Vite", "TailwindCSS", "CRUD"],
  },
  {
    imageSrc: "/bild4.jpg",
    title: "Pokémon 👾",
    text: "Built with Next.js in a team project, this Pokédex lets users explore Pokémons, search by name or ID, and bookmark favorites.",
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
      <main className="flex flex-col p-10">
        {/* About Me */}
        <section className="flex flex-col gap-5 mb-20">
          <h1 className="text-4xl font-semibold">About Me</h1>
          <p className="text-lg">
            Hi, my name is Mustaf. I am a frontend developer who creates web and
            mobile apps with some backend capability. Currently, I am studying
            at Chas Academy in Stockholm to sharpen my skills. I am a motivated
            and curious problem-solver who enjoys working in teams to tackle
            challenges and build solutions.
          </p>
        </section>

        {/* Skills */}
        <SkillsSection />

        {/* Projects */}
        <section className="flex flex-col justify-center items-center gap-5 mt-15">
          <h1 className="text-4xl font-semibold py-2">Projects</h1>
          <div className="grid md:grid-cols-2 2xl:grid-cols-4 justify-center items-center gap-10">
            {projects.map((project, index) => (
              <FlipCard
                key={index}
                imageSrc={project.imageSrc}
                title={project.title}
                text={project.text}
                techStack={project.techStack}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </section>

        {/* CTA & Reference */}
        <div className="flex flex-col justify-center items-center mt-15 p-5 gap-8">
          {/* Let's Connect */}
          <section className="flex flex-col items-center gap-5 mb-10 w-[600px] p-4">
            <h1 className="text-4xl font-semibold py-2">Let's Connect</h1>
            <a href="mailto:Mustaf.h10@outlook.com">
              <button className="relative bg-[#A6A28B] text-black border-2 py-3 px-5 h-52 w-52 rounded-full group transition-all duration-500 transform hover:scale-90 hover:rotate-3 shadow-lg">
                <span className="relative z-10">Write a message</span>
              </button>
            </a>
          </section>

          {/* Reference Card */}
          <section className="flex flex-col items-center gap-5 mb-10 w-[600px] p-4">
            <h1 className="text-4xl font-semibold py-2">Reference</h1>
            <div className="relative w-52 h-52 group [perspective:1000px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] bg-[#A6A28B] border-2 rounded-full flex justify-center items-center shadow-lg">
                {/* Front */}
                <div className="absolute inset-0 flex items-center justify-center rounded-full backface-hidden">
                  <span className="text-lg font-semibold">Click</span>
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center rounded-full [transform:rotateY(180deg)] backface-hidden px-4">
                  <p className="text-sm">
                    <strong>Person:</strong> Ulf Sandström
                  </p>
                  <p className="text-sm">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:ulf@sandstrom.se"
                      className="underline hover:text-white"
                    >
                      ulf@sandstrom.se
                    </a>
                  </p>
                  <p className="text-sm">
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+46704888418"
                      className="underline hover:text-white"
                    >
                      070-488 84 18
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
