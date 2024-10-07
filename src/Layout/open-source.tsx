'use client'
import { useEffect } from "react";
import { Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import gsap from "gsap";

// Define the Tag interface outside of the Project component
interface Tag {
  id: number;
  name: string;
  path: string;
}

export default function Project({
  title,
  desc,
  subdesc,
  tags,
  githubUrl,
  liveDemoUrl,
}: {
  title: string;
  desc: string;
  subdesc: string;
  tags: Tag[];
  githubUrl: string;
  liveDemoUrl?: string;
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
            <h1 className="text-2xl font-bold mb-2 animatedText">{title}</h1>
            <p className="text-gray-500 animatedText">{desc}</p>
            <p className="text-gray-500 animatedText">{subdesc}</p>
            <div className="flex my-14 justify-between items-center">
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
            <div>
              <Link
                className="flex justify-end items-center gap-2 cursor-pointer no-outline"
                href={liveDemoUrl || githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-white animatedText">Check Live Site</p>
                <Image
                  src="/assets/arrow-up.png"
                  width={15}
                  height={15}
                  alt="arrow"
                  className="animatedText"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
