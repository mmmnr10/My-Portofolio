import React from "react";

export default function SkillsSection() {
  const skillsData1 = [
    { name: "HTML5", icon: "devicon-html5-plain", color: "bg-purple-500" },
    {
      name: "TailwindCSS",
      icon: "devicon-tailwindcss-plain",
      color: "bg-pink-500",
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain",
      color: "bg-yellow-400",
    },
    { name: "React", icon: "devicon-react-original", color: "bg-purple-400" },
    { name: "Next.js", icon: "devicon-nextjs-plain", color: "bg-pink-400" },
    { name: "Node.js", icon: "devicon-nodejs-plain", color: "bg-yellow-300" },
    {
      name: "Express.js",
      icon: "devicon-express-original",
      color: "bg-purple-300",
    },
    { name: "WCAG", icon: "", color: "bg-pink-300" },
    { name: "MySQL", icon: "devicon-mysql-plain", color: "bg-yellow-200" },
    { name: "Web APIs", icon: "devicon-openapi-plain", color: "bg-purple-500" },
    { name: "WAI-ARIA", icon: "", color: "bg-pink-500" },
    { name: "Trello", icon: "devicon-trello-plain", color: "bg-yellow-400" },
  ];

  const skillsData2 = [
    {
      name: "React Native",
      icon: "devicon-react-original",
      color: "bg-purple-400",
    },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain",
      color: "bg-pink-400",
    },
    {
      name: "AWS",
      icon: "devicon-amazonwebservices-plain-wordmark",
      color: "bg-yellow-300",
    },
    { name: "Docker", icon: "devicon-docker-plain", color: "bg-purple-300" },
    {
      name: "npm",
      icon: "devicon-npm-original-wordmark",
      color: "bg-pink-300",
    },
    { name: "Figma", icon: "devicon-figma-plain", color: "bg-yellow-200" },
    { name: "VS Code", icon: "devicon-vscode-plain", color: "bg-purple-500" },
    { name: "Git", icon: "devicon-git-plain", color: "bg-pink-500" },
    {
      name: "GitHub Actions",
      icon: "devicon-githubactions-plain",
      color: "bg-yellow-400",
    },
    { name: "Jest", icon: "devicon-jest-plain", color: "bg-purple-400" },
    { name: "CI/CD", icon: "devicon-circleci-plain", color: "bg-pink-400" },
    { name: "Office 365", icon: "", color: "bg-yellow-300" },
    {
      name: "Agile/Scrum",
      icon: "devicon-scrum-plain",
      color: "bg-purple-300",
    },
  ];

  const scrollData1 = [...skillsData1, ...skillsData1, ...skillsData1];
  const scrollData2 = [...skillsData2, ...skillsData2, ...skillsData2];

  return (
    <>
      <h1 className="text-4xl font-extrabold py-3 text-center mb-5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
        The technologies I have been working with recently
      </h1>

      <section className="flex flex-col mb-15 w-[300px] sm:w-[600px] md:w-[700px] lg:w-[700px] xl:w-[800px] mx-auto overflow-hidden relative">
        {/* scrollData1 */}
        <div className="overflow-hidden relative mb-4">
          <div className="animate-scroll1 flex flex-row gap-4">
            {scrollData1.map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} py-2 px-4 rounded-full text-white flex items-center flex-shrink-0`}
              >
                {skill.icon && <i className={`${skill.icon} text-xl mr-2`} />}
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* scrollData2 */}
        <div className="overflow-hidden relative">
          <div className="animate-scroll2 flex flex-row gap-4">
            {scrollData2.map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} py-2 px-4 rounded-full text-white flex items-center flex-shrink-0`}
              >
                {skill.icon && <i className={`${skill.icon} text-xl mr-2`} />}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll1 {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll2 {
          animation: scroll-right 20s linear infinite;
        }
      `}</style>
    </>
  );
}
