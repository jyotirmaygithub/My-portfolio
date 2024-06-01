import React from "react";
import CustomButton from "@/components/button";
import { ArrowForward } from "@mui/icons-material";

// Define types for Anaflous Abdellatif
interface Engineer {
  name: string;
  quote: string;
  description: string;
  role: string;
  skills: string[];
  focus: string;
}

// Anaflous Abdellatif's details
const anaflous: Engineer = {
  name: "Jyotirmay Gupta",
  quote: "Crafting Digital Experiences.",
  description:
    "I'm a passionate Full Stack Web Developer known for crafting sleek, responsive websites with seamless accessibility. Embodying versatility and proficiency, I thrive on open-source contributions and embody the essence of tech enthusiasm. Connect with me on GitHub and LinkedIn.",
  role: "Software Engineer",
  skills: ["Problem-solving", "Full Stack Development (MERN)", "Java"],
};

// Home component
export default function Intro() {
  return (
    <div className="flex flex-col space-y-5 m-4 mx-20">
      <h6>Hi, my name is</h6>
      <div className="space-y-5">
        <h1 className="text-6xl font-bold">{anaflous.name}</h1>
        <h1 className="text-6xl font-bold">{anaflous.quote}</h1>
      </div>
      <p className="my-10">{anaflous.description}</p>
      <div>
        <CustomButton
          title="Check out my resume"
          icon={<ArrowForward />}
          position="end"
          href="https://chatgpt.com/c/c338b375-811a-49ec-88b6-be1041ec7c36"
        />
      </div>
    </div>
  );
}
