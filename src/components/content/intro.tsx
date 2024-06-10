import React from "react";
import CustomButton from "@/components/button";
import { ArrowForward } from "@mui/icons-material";

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
  focus: "Web Development", // Add the 'focus' property
};

// Home component
export default function Intro() {
  return (
    <div className="flex flex-col space-y-5 m-4 sm:m-8 md:m-20">
      <h6 className="text-lg sm:text-xl md:text-2xl">Hi, my name is</h6>
      <div className="space-y-5">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">{Jyotirmay.name}</h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">{Jyotirmay.quote}</h1>
      </div>
      <p className="my-4 sm:my-6 md:my-10 text-base sm:text-lg md:text-xl">{Jyotirmay.description}</p>
      <div>
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
