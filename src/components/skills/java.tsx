"use client";
import React, { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import gsap from "gsap";
import { javaSkills, javaToolsAndTech } from "@/Data/projects";

export default function JavaSkills() {
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
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 ">
        Java Skills
      </h2>
      <div className="flex justify-center mb-4 animatedText">
        <div className="w-12 h-12">
          <Image
            src="https://cdn.iconscout.com/icon/free/png-512/java-23-225999.png"
            alt="Java"
            width={48}
            height={48}
          />
        </div>
      </div>
      <div className="space-y-2">
        {javaSkills.map((skill, index) => (
          <div className="flex items-start " key={index}>
            <CheckCircleIcon className="text-green-500 mr-2" />
            <h3 className="text-lg sm:text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 ">
          Tools and Technologies
        </h3>
        <div className="space-y-2">
          {javaToolsAndTech.map((tool, index) => (
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
