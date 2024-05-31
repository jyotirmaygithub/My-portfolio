import React from "react";

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
  focus: "Web3 Development (Smart Contracts on Blockchain)",
};

// Home component
export default function Intro() {
  return (
    <div className="flex flex-col space-y-3 m-4 mx-10">
      <h6>Hi, my name is</h6>
      <h1 className="text-6xl ">{anaflous.name}</h1>
      <h1 className="text-6xl ">{anaflous.quote}</h1>
      <p>{anaflous.description}</p>
      <h1>Welcome to Anaflous Abdellatif's Profile</h1>
      <p>{anaflous.role}</p>
      <p>Skills: {anaflous.skills.join(", ")}</p>
      <p>Current Focus: {anaflous.focus}</p>
    </div>
  );
}
