'use client'
import React, { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from 'next/image';
import gsap from "gsap";
import { skills, skillDetails, toolsAndTech } from "@/Data/projects";

export default function FullStackSkills() {
  useEffect(() => {
    // GSAP animation for the text and images
    gsap.fromTo(
      ".animatedText",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.5,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 ">Full Stack Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {skills.map((skill, index) => (
          <div key={index} className={`w-12 h-12 ${skill.bg || ""} animatedText`}>
            <Image src={skill.src} alt={skill.alt} width={48} height={48} />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {skillDetails.map((detail, index) => (
          <div className="flex items-start " key={index}>
            <CheckCircleIcon className="text-green-500 mr-2" />
            <h3 className="text-lg sm:text-xl font-semibold">{detail}</h3>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 ">Tools and Technologies</h3>
        <div className="space-y-2">
          {toolsAndTech.map((tool, index) => (
            <div className="flex items-start " key={index}>
              <CheckCircleIcon className="text-blue-500 mr-2" />
              <h3 className="text-lg sm:text-xl font-semibold">{tool}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
