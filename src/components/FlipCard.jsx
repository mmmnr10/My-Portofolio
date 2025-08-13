import React, {useState} from "react";
import {FaGithubSquare, FaEye} from "react-icons/fa";

export default function FlipCard({
  imageSrc,
  title,
  text,
  techStack,
  gitHubLink,
  liveLink,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div
      className="w-70 h-[450px] p-2  [perspective:1000px]"
      onClick={handleFlip}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FramSida */}
        <div
          style={{borderColor: "var(--card-border)"}}
          className="absolute w-full h-full bg-white shadow-lg rounded-3xl flex flex-col items-center justify-center [backface-visibility:hidden] border-2 "
        >
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={imageSrc}
            alt={title}
          />
        </div>

        {/* BakSida */}
        <div className="w-full h-full card-bg text-white shadow-lg rounded-3xl flex flex-col justify-start  [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-2xl text-center w-full mt-2 mb-2">{title}</h3>{" "}
          <p className="flex items-center text-center p-2 h-55">{text}</p>
          <ul className="flex flex-wrap gap-2 p-2 mt-2 list-disc list-inside">
            {techStack.map((tech, index) => (
              <li key={index} className="px-3 mt-1 text-sm">
                {tech}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-2 right-3 flex justify-end gap-4 text-2xl w-full ">
            <a href={liveLink} target="_blank">
              <FaEye />
            </a>
            <a href={gitHubLink} target="_blank">
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import {RiLiveFill} from "react-icons/ri";
// import {FaGithubSquare} from "react-icons/fa";

// export default function FlipCard({
//   imageSrc,
//   title,
//   text,
//   techStack,
//   gitHubLink,
// }) {
//   return (
//     // perspective:1000pz aktivererar 3D effekten
//     // transform-style:preserve-3d gör att elementet behåller sin 3D effekt
//     // backface-visibility:hidden gör att baksidan inte syns
//     // transform:rotateY(180deg) gör att elementet roterar 180 grader
//     <div className="w-70 h-96 [perspective:1000px]">
//       <div className="w-full h-full transition-transform duration-1000 ease-in-out [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
//         {/* Front Sida */}
//         <div className="absolute w-full h-full bg-white shadow-lg rounded-3xl flex flex-col items-center justify-center [backface-visibility:hidden]">
//           <img
//             className="w-full h-full object-cover rounded-3xl"
//             src={imageSrc}
//             alt={title}
//           />
//         </div>

//         {/* Back Sida */}
//         <div className="absolute w-full h-full bg-gray-900 text-white shadow-lg rounded-3xl flex flex-col items-center justify-center p-5 [transform:rotateY(180deg)] [backface-visibility:hidden]">
//           <p className="text-center">{text}</p>
//           <div className="flex flex-wrap gap-2 mt-3">
//             {techStack.map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1 text-sm bg-gray-700 rounded-full"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//           <div className="flex gap-3 mt-4 text-2xl">
//             <a href={gitHubLink} target="_blank">
//               <FaGithubSquare />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import {RiLiveFill} from "react-icons/ri";
// import {FaGithubSquare} from "react-icons/fa";

// export default function Cards({imageSrc, title, text, techStack, gitHubLink}) {
//   return (
//     <div className="max-w-xs rounded-3xl overflow-hidden shadow-xl  duration-300 hover:-rotate-3 h-[521px] flex flex-col card-bg">
//       {/* Image */}
//       <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
//       {/* Content */}
//       <div className="p-5 w-full h-48">
//         <h2 className="text-2xl font-semibold">{title}</h2>
//         <p className=" mt-2">{text}</p>
//       </div>

//       {/* Tech Stack */}
//       <div className="flex flex-row flex-wrap gap-2 p-5  ">
//         {techStack.map((tech, index) => {
//           return (
//             <div key={index} className="px-3 py-1 text-sm rounded-full border ">
//               {tech}
//             </div>
//           );
//         })}
//       </div>

//       {/* Links */}
//       <div className="flex flex-row justify-end gap-2 mr-2 mb-2 text-2xl">
//         <a href="" target="_blank">
//           <RiLiveFill />
//         </a>
//         <a href={gitHubLink} target="_blank">
//           <FaGithubSquare />
//         </a>
//       </div>
//     </div>
//   );
// }
