import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from 'next/image';

export default function FullStackSkills() {
  const skills = [
    { src: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png", alt: "HTML" },
    { src: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png", alt: "CSS" },
    { src: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png", alt: "JavaScript" },
    { src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", alt: "React" },
    { src: "https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-2/15/nextjs-64.png", alt: "Next.js", bg: "bg-white" },
    { src: "https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png", alt: "TypeScript" },
    { src: "https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png", alt: "MongoDB", bg: "bg-white" },
    { src: "https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png", alt: "Node.js", bg: "bg-white" },
    { src: "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png", alt: "MySQL", bg: "bg-white" },
  ];

  const skillDetails = [
    "Proficient in full stack development using the MERN stack (MongoDB, Express.js, React, Node.js).",
    "Expertise in using Next.js for server-side rendering and TypeScript for static typing.",
    "Experienced with various databases, including MongoDB, PostgreSQL, and MySQL.",
    "Skilled in leveraging cloud services such as AWS and GCP.",
    "Well-versed in fundamental web technologies like HTML, CSS, and JavaScript.",
  ];

  const toolsAndTech = [
    "Git & GitHub",
    "Material UI",
    "TailwindCSS",
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Full Stack Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {skills.map((skill, index) => (
          <div key={index} className={`w-12 h-12 ${skill.bg || ""}`}>
            <Image src={skill.src} alt={skill.alt} width={48} height={48} />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {skillDetails.map((detail, index) => (
          <div className="flex items-start" key={index}>
            <CheckCircleIcon className="text-green-500 mr-2" />
            <h3 className="text-lg sm:text-xl font-semibold">{detail}</h3>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">Tools and Technologies</h3>
        <div className="space-y-2">
          {toolsAndTech.map((tool, index) => (
            <div className="flex items-start" key={index}>
              <CheckCircleIcon className="text-blue-500 mr-2" />
              <h3 className="text-lg sm:text-xl font-semibold">{tool}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
