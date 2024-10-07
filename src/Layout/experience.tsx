"use client";
import { useEffect } from "react";
import { Image } from "@nextui-org/react";
import gsap from "gsap";

interface Tag {
  id: number;
  name: string;
  path: string;
}

export default function Project({
  company,
  role,
  tags,
  duration,
  responsibilities,
}: {
  company: string;
  role: string;
  tags: Tag[];
  duration: string;
  responsibilities: string;
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
    <div className="flex justify-center items-center flex-wrap lg:justify-between m-2">
      <section className="p-4 border">
        <div
          className="flex flex-col justify-center bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/spotlight1.png)" }}
        >
          <div className="p-4 space-y-8">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl animatedText">
              {company}
            </h1>
            <h2 className="text-gray-300 text-2xl animatedText">{role}</h2>
            <h3 className="animatedText text-gray-500 mb-5 text-base sm:text-lg md:text-xl">
              {duration}
            </h3>
            <p className="text-gray-500 animatedText">{responsibilities}</p>
          </div>
          <div className="flex my-4 justify-between items-center">
            <div className="flex justify-center gap-4">
              {tags.map((tag) => (
                <Image
                  key={tag.id}
                  width={40}
                  height={40}
                  src={tag.path}
                  alt={tag.name}
                  className="animatedText" // Apply GSAP class to tags
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
