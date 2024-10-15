'use client'
import React, { useEffect } from "react";
import gsap from "gsap";

export default function Learning({
  title,
  degree,
  graduation,
  keyLearnings,
}: {
  title: string;
  degree: string;
  graduation: string;
  keyLearnings: string[];
}) {
  useEffect(() => {
    // GSAP animation for the title, description, and tags
    gsap.fromTo(
      ".animatedText",
      { opacity: 0, y: -20 }, // Initial state
      {
        opacity: 1,
        y: 0, // End state
        duration: 1,
        stagger: 0.2, // Staggering effect for multiple elements
        ease: "power2.inOut",
      }
    );
  }, []); // Empty dependency array to run on mount only

  return (
    <div className="border border-white p-4 flex flex-col space-y-10">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl animatedText">
        {title}
      </h1>
      <h2 className="text-gray-300 text-lg sm:text-xl md:text-2xl animatedText">
        {degree}
      </h2>
      <h3 className="animatedText text-gray-500 text-base sm:text-lg md:text-xl">
        {graduation}
      </h3>
      <div className="animatedText text-gray-500 text-base" style={{marginTop: "30px"}}>
        <strong>Key Learnings:</strong>
        <br />
        {keyLearnings.map((learning, index) => (
          <React.Fragment key={index}>
            {learning}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
