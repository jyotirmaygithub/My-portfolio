"use client";
import { useState, useEffect } from "react";
import { Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { projects } from "../../Data/projects";
import gsap from "gsap";

const ProjectsPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const {
    title,
    desc,
    subdesc,
    logo,
    logoStyle,
    tags,
    githubUrl,
    screenshotSrc,
    liveDemoUrl,
  } = projects[index];

  const projectCount = projects.length;

  const handleNavigation = (direction: String) => {
    setIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    gsap.fromTo(
      ".animatedText",
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
    gsap.fromTo(
      ".animatedLogo",
      { scale: 0 },
      { scale: 1, duration: 1, ease: "power2.inOut" }
    );
  }, [index]);
  return (
    <div className="flex justify-center items-center flex-wrap lg:justify-between m-2 lg:m-24">
      <section className="p-4 border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="flex flex-col justify-center bg-cover bg-center "
            style={{ backgroundImage: "url(/images/spotlight2.png)" }}
          >
            <div className="p-4 space-y-8">
              <div className="animatedLogo" style={logoStyle}>
                {logo}
              </div>
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
                      className="animatedText"
                    />
                  ))}
                </div>
              </div>
              <div className="">
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
              <div
                className="flex justify-between items-center mt-7 w-full"
                style={{ justifyContent: "space-between" }}
              >
                <button onClick={() => handleNavigation("previous")}>
                  <Image
                    height={25}
                    width={25}
                    src="/assets/left-arrow.png"
                    alt="left arrow"
                    className="animatedText"
                  />
                </button>

                <button onClick={() => handleNavigation("next")}>
                  <Image
                    height={25}
                    width={25}
                    src="/assets/right-arrow.png"
                    alt="right arrow"
                    className="animatedText"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              width={600}
              height={600}
              src={screenshotSrc}
              alt="Screenshot"
              className="animatedText"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
