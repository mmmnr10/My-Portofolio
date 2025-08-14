import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function FlipCard({
  imageSrc,
  title,
  text,
  techStack,
  liveLink,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div
      className="w-70 h-[450px] p-2 [perspective:1000px]"
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
          style={{ borderColor: "var(--card-border)" }}
          className="absolute w-full h-full bg-white shadow-lg rounded-3xl flex flex-col items-center justify-center [backface-visibility:hidden] border-2"
        >
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={imageSrc}
            alt={title}
          />
        </div>

        {/* BakSida */}
        <div className="w-full h-full card-bg text-white shadow-lg rounded-3xl flex flex-col justify-start [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-2xl text-center w-full mt-2 mb-2">{title}</h3>
          <p className="flex items-center text-center p-2 h-55">{text}</p>
          <ul className="flex flex-wrap gap-2 p-2 mt-2 list-disc list-inside">
            {techStack.map((tech, index) => (
              <li key={index} className="px-3 mt-1 text-sm">
                {tech}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-2 right-3 flex justify-end gap-4 text-2xl w-full">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FaEye />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
