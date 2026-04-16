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
    color: "from-amber-600 to-amber-400"
  },
  {
    title: "Aura Task Manager",
    text: "En professionell Kanban-stil uppgiftshanterare med drag-and-drop och local storage.",
    details: "Aura Task Manager är en avancerad uppgiftshanterare byggd för hög produktivitet. Den har en modern Glassmorphism-design, intuitiv dra-och-släpp-funktionalitet och använder Local Storage för att spara data lokalt. Skapad med fokus på prestanda och användarupplevelse.",
    imageSrc: "/aura-task.png",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://html-projekt.vercel.app/",
    githubLink: "https://github.com/mmmnr10/Html-Projekt",
    color: "from-amber-600 to-amber-400"
  },
  {
    title: "Wish List",
    text: "En stilren och interaktiv plattform för att spara och organisera dina favoritprodukter.",
    details: "Wish List är ett vackert designat projekt som tillåter användare att smidigt hantera sin önskelista. Applikationen erbjuder ett intuitivt gränssnitt med fokus på användarvänlighet och en modern estetisk design. Perfekt för att hålla koll på framtida köp.",
    imageSrc: "/senastebilden.png",
    techStack: ["React", "JavaScript", "TailwindCSS" , "MongoDB"],
    liveLink: "https://wish-list-hazel.vercel.app/",
    githubLink: "https://github.com/mmmnr10/Wish-List",
    color: "from-amber-600 to-amber-400"
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

const ProjectCard = ({ project, onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
      className="group relative h-[420px] rounded-[2rem] overflow-hidden cursor-pointer glass border border-white/5 hover:border-[#f2a641]/40 shadow-2xl transition-all duration-500"
    >
      {/* Hover Spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(242, 166, 65, 0.12), transparent 40%)`
        }} 
      />

      {/* Image Container */}
      <div className="h-2/3 overflow-hidden relative z-10">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay`} />
        {/* Subtle inner shadow top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 glass border-t border-white/5 z-10 bg-black/80 rounded-b-[2rem]">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-outfit text-white group-hover:text-amber-400 transition-colors duration-300">{project.title}</h3>
          <FiArrowUpRight className="text-xl text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
        <p className="text-sm text-gray-400 line-clamp-2 mb-4 font-light">{project.text}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((s, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-300 backdrop-blur-md">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => (
  <section className="py-20">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div className="space-y-4">
        <h2 className="text-4xl font-outfit font-bold text-white">Expertise</h2>
        <div className="h-1.5 w-20 bg-amber-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 glass rounded-3xl border border-white/10 hover:border-amber-500/50 transition-all group"
          >
            <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-2xl text-amber-500 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold font-outfit mb-4 text-white">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s, j) => (
                <span key={j} className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-gray-400">
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
      <section className="min-h-[70vh] flex flex-col justify-center items-start space-y-8 py-20 relative overflow-hidden">
        {/* Glow orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -right-20 top-10 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"
        />
        
        <div className="space-y-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-bold uppercase tracking-[0.2em] text-amber-500 text-xs">
              Tillgänglig för uppdrag
            </span>
          </motion.div>
          
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
            }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-outfit font-bold text-white leading-[1.05] tracking-tight"
          >
            <div className="overflow-hidden inline-block pb-2">
              <motion.span variants={{ hidden: { y: "110%" }, visible: { y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } } }} className="inline-block">Skapar</motion.span>
            </div>{" "}
            <div className="overflow-hidden inline-block pb-2">
              <motion.span variants={{ hidden: { y: "110%" }, visible: { y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } } }} className="inline-block">digitala</motion.span>
            </div> <br />
            <div className="overflow-hidden inline-block py-2">
              <motion.span variants={{ hidden: { y: "110%" }, visible: { y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } } }} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#d48b26] via-[#f2a641] to-[#ffd875]">
                upplevelser.
              </motion.span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-400 leading-relaxed font-inter font-light max-w-2xl"
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
            <h2 className="text-4xl font-outfit font-bold text-white">Utvalda Projekt</h2>
            <div className="h-1.5 w-20 bg-amber-500 rounded-full" />
          </div>
          <p className="hidden md:block text-gray-400 font-medium italic">En inblick i mitt skapande</p>
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
                className="flex items-center gap-2 text-amber-500 hover:text-amber-400 font-bold mb-8 transition-colors group"
              >
                <FiChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to projects
              </button>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-5xl font-outfit font-bold text-white">{selectedProject.title}</h2>
                  <p className="text-xl text-gray-300 leading-relaxed">{selectedProject.details}</p>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-sm uppercase tracking-widest text-amber-500">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-amber-500/10 text-amber-300 rounded-xl font-bold text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      className="inline-flex items-center gap-4 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-2xl font-bold shadow-xl shadow-amber-500/20 transition-all hover:scale-105"
                    >
                      Besök Live Demo <FiArrowUpRight />
                    </a>
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl font-bold border border-white/5 transition-all hover:scale-105"
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
          <h2 className="text-4xl font-outfit font-bold text-white">Min Resa</h2>
          <div className="h-1.5 w-20 bg-amber-500 rounded-full" />
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
          <h2 className="text-4xl font-outfit font-bold text-white">Vad folk säger</h2>
          <div className="h-1.5 w-20 bg-amber-500 rounded-full mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto">
          <TestimonialCard 
            text="Mustaf är en otroligt driven utvecklare som alltid strävar efter att leverera högsta kvalitet."
            author="Studiekamrat @ Chas"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="relative glass p-12 md:p-24 rounded-[3rem] text-center overflow-hidden border border-white/5 hover:border-amber-500/20 transition-colors duration-700">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-700/10 blur-[120px] rounded-full -ml-48 -mb-48 pointer-events-none" />
          
          <div className="relative z-10 space-y-10 max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-outfit font-bold text-white leading-tight">
              Redo att starta ett <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-300">nytt projekt?</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-xl mx-auto">
              Jag letar alltid efter nya spännande utmaningar och samarbeten. 
              Tveka inte att höra av dig om du vill bygga något extraordinärt.
            </p>
            <motion.a 
              href="mailto:Mustaf.h10@outlook.com" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-4 bg-transparent text-white border border-[#f2a641]/50 hover:border-[#f2a641] px-12 py-5 rounded-full font-bold text-lg transition-all overflow-hidden shadow-[0_0_40px_rgba(242,166,65,0.15)] hover:shadow-[0_0_80px_rgba(242,166,65,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#d48b26] to-[#f2a641] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-4">
                Kontakta mig <FiMail className="text-xl group-hover:scale-110 transition-transform duration-300" />
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-20">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl font-outfit font-bold text-white text-center">Referenser</h2>
          <div className="h-1.5 w-20 bg-amber-500 rounded-full mx-auto" />
        </div>
        
        <div className="max-w-md mx-auto glass p-8 rounded-3xl border border-white/10 text-center space-y-4">
          <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto text-3xl text-amber-500">
            &quot;
          </div>
          <p className="text-gray-300 font-medium italic leading-relaxed">
            &quot;Mustaf visar en unik förmåga att snabbt sätta sig in i nya teknologier och omsätta dem i praktiken.&quot;
          </p>
          <div className="pt-4 border-t border-white/10">
            <p className="font-bold text-white">Referenser lämnas gärna vid förfrågan.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatBox({ number, label }) {
  return (
    <div className="text-center space-y-1">
      <h3 className="text-4xl font-outfit font-bold text-amber-500">{number}</h3>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</p>
    </div>
  );
}

function TimelineItem({ year, title, place, description }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-amber-500"
    >
      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
      <span className="text-sm font-bold text-amber-500">{year}</span>
      <h4 className="text-xl font-bold text-white mt-1">{title}</h4>
      <p className="text-sm font-medium text-gray-400">{place}</p>
      <p className="text-sm text-gray-500 mt-2 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({ text, author }) {
  return (
    <div className="p-8 glass rounded-[2rem] border border-white/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 text-4xl text-amber-500/10 group-hover:text-amber-500/20 transition-colors">&quot;</div>
      <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">&quot;{text}&quot;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400" />
        <p className="font-bold text-sm text-white">{author}</p>
      </div>
    </div>
  );
}

