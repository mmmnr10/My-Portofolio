import React from "react";

export default function SkillsSection() {
  const skillsData1 = [
    {name: "HTML5", icon: "devicon-html5-plain "},
    {name: "TailwindCSS", icon: "devicon-tailwindcss-plain "},
    {name: "JavaScript", icon: "devicon-javascript-plain "},
    {name: "React", icon: "devicon-react-original "},
    {name: "Next.js", icon: "devicon-nextjs-plain"},
    {name: "Node.js", icon: "devicon-nodejs-plain "},
    {name: "Express.js", icon: "devicon-express-original"},
    {name: "WCAG", icon: ""},
    {name: "MySQL", icon: "devicon-mysql-plain "},
    {name: "Web APIs", icon: "devicon-openapi-plain"},
    {name: "WAI-ARIA", icon: ""},
    {name: "Trello", icon: "devicon-trello-plain"},
  ];

  const skillsData2 = [
    {name: "React Native", icon: "devicon-react-original"},
    {name: "TypeScript", icon: "devicon-typescript-plain"},
    {name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark"},
    {name: "Docker", icon: "devicon-docker-plain "},
    {name: "GitHub", icon: "devicon-github-original"},
    {name: "npm", icon: "devicon-npm-original-wordmark"},
    {name: "Figma", icon: "devicon-figma-plain "},
    {name: "VS Code", icon: "devicon-vscode-plain "},
    {name: "Git", icon: "devicon-git-plain "},
    {name: "GitHub Actions", icon: "devicon-githubactions-plain"},
    {name: "Jest", icon: "devicon-jest-plain"},
    {name: "CI/CD", icon: "devicon-circleci-plain"},
    {name: "Office 365", icon: ""},
    {name: "Agile/Scrum", icon: "devicon-scrum-plain"},
  ];

  const scrollData1 = [
    ...skillsData1,
    ...skillsData1,
    ...skillsData1,
    ...skillsData1,
    ...skillsData1,
  ];
  const scrollData2 = [
    ...skillsData2,
    ...skillsData2,
    ...skillsData2,
    ...skillsData2,
    ...skillsData2,
  ];

  return (
    <>
      <h1 className="text-4xl font-bold py-3 text-center mb-5">
        The technologies I have been working with recently
      </h1>
      <section className="flex flex-col mb-15 w-[300px] sm:w-[600px] md:w-[700px] lg:w-[700px] xl:w-[800px] mx-auto overflow-hidden ">
        {/* skillData1 */}
        <div className="relative w-full overflow-hidden hover-pause mb-4">
          <div className="absolute top-0 left-0 h-full w-10 bg-gradient-right z-10" />
          <div className="scroll-container1 flex flex-row py-4">
            {scrollData1.map((skill, index) => (
              <div
                key={index}
                className="py-2 px-4 mx-2 rounded-full text-gray-20 
                 flex items-center flex-shrink-0"
              >
                {skill.icon && <i className={`${skill.icon} text-xl mr-2`} />}
                {skill.name}
              </div>
            ))}
          </div>
          <div className="absolute top-0 right-0 h-full w-10 bg-gradient-left z-10" />
        </div>

        {/* skillsData2*/}
        <div className="relative w-full overflow-hidden hover-pause">
          <div className="absolute top-0 left-0 h-full w-10 bg-gradient-right z-10" />
          <div className="scroll-container2 flex flex-row py-4">
            {scrollData2.map((skill, index) => (
              <div
                key={index}
                className="py-2 px-4 mx-2 l text-gray-20 flex items-center flex-shrink-0"
              >
                {skill.icon && <i className={`${skill.icon} text-xl mr-2`} />}
                {skill.name}
              </div>
            ))}
          </div>
          <div className="absolute top-0 right-0 h-full w-10 bg-gradient-left z-10" />
        </div>
      </section>
    </>
  );
}
