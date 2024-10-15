"use client";
import React, { useEffect } from "react";
import CustomImage from "@/components/images/myimage";
import gsap from "gsap";
import { aboutMeText } from "@/Data/projects";

export default function Me() {
  // useEffect(() => {
  //   // GSAP animation for the text and image
  //   gsap.fromTo(
  //     ".",
  //     { opacity: 0, y: -20 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 2,
  //       stagger: 0.5,
  //       ease: "power2.inOut",
  //     }
  //   );
  // }, []);

  return (
    <div className="space-y-5 m-4 my-10 md:my-20 md:mx-20">
      <h1 className="text-2xl md:text-4xl font-bold ">
        {aboutMeText.heading}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-5">
          {aboutMeText.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-500 text-base md:text-lg ">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex justify-center md:justify-center">
          <CustomImage />
        </div>
      </div>
    </div>
  );
}
