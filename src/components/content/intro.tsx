'use client'
import React, { useEffect } from "react";
import CustomButton from "@/components/button";
import { ArrowForward } from "@mui/icons-material";
import gsap from "gsap";

// Define types for Jyotirmay Gupta
interface Engineer {
  name: string;
  quote: string;
  description: string;
  role: string;
  skills: string[];
  focus: string;
}

const Jyotirmay: Engineer = {
  name: "Jyotirmay Gupta",
  quote: "Crafting Digital Experiences.",
  description:
    "I'm a passionate Full Stack Web Developer known for crafting sleek, responsive websites with seamless accessibility. Embodying versatility and proficiency, I thrive on open-source contributions and embody the essence of tech enthusiasm. Connect with me on GitHub and LinkedIn.",
  role: "Software Engineer",
  skills: ["Problem-solving", "Full Stack Development (MERN)", "Java"],
  focus: "Web Development",
};

// Home component
export default function Intro() {
  useEffect(() => {
    // GSAP animation for the title, description, and tags
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
    <div className="flex flex-col space-y-5 m-4 sm:m-8 md:m-20">
      <h6 className="text-lg sm:text-xl md:text-2xl animatedText">Hi, my name is</h6>
      <div className="space-y-5">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold animatedText">{Jyotirmay.name}</h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold animatedText">{Jyotirmay.quote}</h1>
      </div>
      <p className="my-4 sm:my-6 md:my-10 text-base sm:text-lg md:text-xl animatedText">{Jyotirmay.description}</p>
      <div className="">
        <CustomButton
          title="Check out my resume"
          icon={<ArrowForward />}
          position="end"
          href="https://drive.google.com/file/d/1xIRtvWVyQIJkVOfU4p-4pxYZ_YZWg4ex/view"
        />
      </div>
    </div>
  );
}
