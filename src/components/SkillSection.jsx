import React from "react";

export default function SkillsSection() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "TypeScript",
    "React", "Next.js", "Node.js", "Express",
    "MySQL", "Web APIs", "Git", "GitHub",
    "React Native", "AWS", "Docker", "Figma"
  ];

  return (
    <section className="mt-20 mb-20">
      <h2 className="text-4xl font-semibold text-gray-900 dark:text-white text-center mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-4 border border-[var(--border-color)] rounded-xl bg-white dark:bg-[#242424] shadow-sm hover:shadow-md transition"
          >
            <p className="text-center text-gray-800 dark:text-gray-200 font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
