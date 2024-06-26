import React from "react";
import CustomImage from "@/components/images/myimage";

export default function Me() {
  return (
    <div className="space-y-5 m-4 my-10 md:my-20 md:mx-20">
      <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <p className="text-base md:text-lg">
            I am currently pursuing a Bachelors in Computer Applications at
            Lovely Professional University. While I have a solid grasp of coding
            and web development, particularly in Full Stack technologies like
            MERN (MongoDB, Express.js, React.js, Node.js), I am eager to explore
            beyond these boundaries.
          </p>
          <p className="text-base md:text-lg">
            In addition to my technical skills, I have a deep passion for
            swimming and reading. To broaden my horizons, I have actively engaged
            in two societies, OASIS and DRAGCON, where I am dedicated to
            improving my communication abilities. Alongside this, I allocate
            time to immerse myself in books across various disciplines such as
            sociology, history, economics, psychology, and philosophy. These
            readings not only enhance my understanding of the world and myself
            but also cultivate critical thinking and creativity.
          </p>
        </div>
        <div className="flex justify-center md:justify-center">
          <CustomImage />
        </div>
      </div>
    </div>
  );
}
