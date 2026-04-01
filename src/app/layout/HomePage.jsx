"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiMail, FiCode, FiLayers, FiDatabase, FiTool, FiChevronLeft, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Nexus SaaS Dashboard",
    text: "En toppmodern och interaktiv admin-panel designad för framtidens SaaS-företag.",
    details: "Nexus Dashboard är en kraftfull plattform med ett sofistikerat glassmorphism-gränssnitt. Den erbjuder realtidsinsikter med dynamiska grafer för intäktsanalys, systemhälsa och användarkonvertering. Med sju dedikerade vyer — från Analytics till Projekthantering — levererar den en sömlös och högpresterande användarupplevelse. Fullt responsiv och optimerad för prestanda.",
    imageSrc: "/nexus_dashboard.png",
    techStack: ["React", "Next.js", "Framer Motion", "TailwindCSS", "Lucide React"],
    liveLink: "https://nexus-dashboard-ecru-chi.vercel.app/",
    githubLink: "https://github.com/mmmnr10/nexus-dashboard",
    color: "from-indigo-500 to-cyan-400"
  },
  {
    title: "Aura Task Manager",
    text: "En professionell Kanban-stil uppgiftshanterare med drag-and-drop och local storage.",
    details: "Aura Task Manager är en avancerad uppgiftshanterare byggd för hög produktivitet. Den har en modern Glassmorphism-design, intuitiv dra-och-släpp-funktionalitet och använder Local Storage för att spara data lokalt. Skapad med fokus på prestanda och användarupplevelse.",
    imageSrc: "/html.png.png",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://html-projekt.vercel.app/",
    githubLink: "https://github.com/mmmnr10/Html-Projekt",
    color: "from-purple-500 to-pink-500"
  }
];

const skills = [
  {
    title: "Languages",
    icon: <FiCode />,
    items: ["JavaScript", "HTML5", "CSS3", "TypeScript"],
  },
  {
    title: "Frameworks",
    icon: <FiLayers />,
    items: ["React", "Next.js", "Vite", "TailwindCSS", "React Native"],
  },
  { 
    title: "Backend", 
    icon: <FiDatabase />,
    items: ["REST API", "MongoDB", "SQL"] 
  },
  { 
    title: "Tools", 
    icon: <FiTool />,
    items: ["Git", "GitHub", "Vercel", "Npm", "Figma"] 
  },
];

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all"
    onClick={() => onClick(project)}
  >
    {/* Image Container */}
    <div className="h-2/3 overflow-hidden">
      <img
        src={project.imageSrc}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 glass border-t border-white/20">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold font-outfit text-gray-900 dark:text-white">{project.title}</h3>
        <FiArrowUpRight className="text-xl text-indigo-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">{project.text}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.techStack.slice(0, 3).map((s, i) => (
          <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-black/5 dark:bg-white/10 rounded-lg text-gray-600 dark:text-gray-300">
            {s}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const SkillsSection = () => (
  <section className="py-20">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div className="space-y-4">
        <h2 className="text-4xl font-outfit font-bold text-gray-900 dark:text-white">Expertise</h2>
        <div className="h-1.5 w-20 bg-indigo-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 glass rounded-3xl border border-black/5 dark:border-white/10 hover:border-indigo-500/50 transition-all group"
          >
            <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-2xl text-indigo-500 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold font-outfit mb-4 text-gray-900 dark:text-white">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s, j) => (
                <span key={j} className="text-xs font-semibold px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center items-start space-y-8 py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -right-20 top-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"
        />
        
        <div className="space-y-4 max-w-3xl relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold uppercase tracking-[0.3em] text-indigo-500 text-sm"
          >
            Frontend Utvecklare
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-outfit font-bold text-gray-900 dark:text-white leading-[1.1]"
          >
            Skapar digitala <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">upplevelser.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium"
          >
            Hej, jag heter Mustaf. Jag är en passionerad utvecklare som kombinerar 
            kreativ design med robust teknologi för att bygga framtidens webb och mobilappar.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <h2 className="text-4xl font-outfit font-bold text-gray-900 dark:text-white">Utvalda Projekt</h2>
            <div className="h-1.5 w-20 bg-indigo-500 rounded-full" />
          </div>
          <p className="hidden md:block text-gray-500 font-medium italic">En inblick i mitt skapande</p>
        </div>

        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div
              key="project-details"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-indigo-500 hover:text-indigo-400 font-bold mb-8 transition-colors group"
              >
                <FiChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to projects
              </button>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-5xl font-outfit font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">{selectedProject.details}</p>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-sm uppercase tracking-widest text-indigo-500">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 rounded-xl font-bold text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      className="inline-flex items-center gap-4 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-indigo-500/20 transition-all hover:scale-105"
                    >
                      Besök Live Demo <FiArrowUpRight />
                    </a>
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        className="inline-flex items-center gap-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-bold border border-white/10 dark:border-white/5 transition-all hover:scale-105"
                      >
                        GitHub <FiGithub className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <img src={selectedProject.imageSrc} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="projects-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((p, i) => (
                <ProjectCard key={i} project={p} onClick={setSelectedProject} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-8 glass rounded-[2.5rem] border border-white/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBox number="2+" label="Års Studier" />
          <StatBox number="15+" label="Slutförda Projekt" />
          <StatBox number="100%" label="Motivation" />
          <StatBox number="∞" label="Nyfikenhet" />
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-outfit font-bold text-gray-900 dark:text-white">Min Resa</h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full" />
        </div>

        <div className="space-y-8">
          <TimelineItem 
            year="2024 - Nu" 
            title="Frontend Developer Student" 
            place="Chas Academy, Stockholm"
            description="Fördjupning inom React, Next.js, TypeScript och moderna webbteknologier."
          />
          <TimelineItem 
            year="2023" 
            title="Programmering 1" 
            place="Jensen Komvux"
            description="Grundläggande programmering och problemlösning."
          />
        </div>
      </section>

      {/* Skills */}
      <SkillsSection />

      {/* Testimonials */}
      <section className="py-20 space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-outfit font-bold text-gray-900 dark:text-white">Vad folk säger</h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard 
            text="Mustaf är en otroligt driven utvecklare som alltid strävar efter att leverera högsta kvalitet."
            author="Studiekamrat @ Chas"
          />
          <TestimonialCard 
            text="Hans känsla för design och detaljer gör att hans projekt alltid sticker ut."
            author="Instruktör"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="relative glass p-12 md:p-24 rounded-[3rem] text-center overflow-hidden border border-white/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 blur-[100px] rounded-full -ml-48 -mb-48" />
          
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-outfit font-bold text-gray-900 dark:text-white">
              Redo att starta ett <br />
              <span className="text-indigo-500">nytt projekt?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
              Jag letar alltid efter nya spännande utmaningar och samarbeten. 
              Tveka inte att höra av dig!
            </p>
            <a href="mailto:Mustaf.h10@outlook.com" className="inline-flex items-center gap-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-12 py-5 rounded-3xl font-bold text-lg hover:scale-105 transition-all shadow-2xl">
              Kontakta mig <FiMail className="text-xl" />
            </a>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-20">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl font-outfit font-bold text-gray-900 dark:text-white text-center">Referenser</h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto" />
        </div>
        
        <div className="max-w-md mx-auto glass p-8 rounded-3xl border border-black/5 dark:border-white/10 text-center space-y-4">
          <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto text-3xl text-indigo-500">
            &quot;
          </div>
          <p className="text-gray-600 dark:text-gray-300 font-medium italic leading-relaxed">
            &quot;Mustaf visar en unik förmåga att snabbt sätta sig in i nya teknologier och omsätta dem i praktiken.&quot;
          </p>
          <div className="pt-4 border-t border-black/5 dark:border-white/10">
            <p className="font-bold text-gray-900 dark:text-white">Referenser lämnas gärna vid förfrågan.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatBox({ number, label }) {
  return (
    <div className="text-center space-y-1">
      <h3 className="text-4xl font-outfit font-bold text-indigo-500">{number}</h3>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  );
}

function TimelineItem({ year, title, place, description }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-indigo-500"
    >
      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
      <span className="text-sm font-bold text-indigo-500 dark:text-indigo-400">{year}</span>
      <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{title}</h4>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{place}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({ text, author }) {
  return (
    <div className="p-8 glass rounded-[2rem] border border-white/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 text-4xl text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors">&quot;</div>
      <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed">&quot;{text}&quot;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400" />
        <p className="font-bold text-sm text-gray-900 dark:text-white">{author}</p>
      </div>
    </div>
  );
}

