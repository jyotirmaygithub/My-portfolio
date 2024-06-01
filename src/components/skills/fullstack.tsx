import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function FullStackSkills() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <h2 className="text-3xl font-bold mb-4">Full Stack Skills</h2>
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png"
          alt="HTML"
          className="w-12 h-12"
        />
        <img
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png"
          alt="CSS"
          className="w-12 h-12"
        />
        <img
          src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"
          alt="JavaScript"
          className="w-12 h-12"
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="React"
          className="w-12 h-12"
        />
        <img
          src="https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-2/15/nextjs-64.png"
          alt="Next.js"
          className="w-12 h-12 bg-white"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png"
          alt="TypeScript"
          className="w-12 h-12"
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png"
          alt="MongoDB"
          className="w-12 h-12 bg-white"
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png"
          alt="Node.js"
          className="w-12 h-12 bg-white"
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png"
          alt="MySQL"
          className="w-12 h-12 bg-white"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-start">
          <CheckCircleIcon className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">
            Proficient in full stack development using the MERN stack (MongoDB,
            Express.js, React, Node.js).
          </h3>
        </div>
        <div className="flex items-start">
          <CheckCircleIcon className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">
            Expertise in using Next.js for server-side rendering and TypeScript
            for static typing.
          </h3>
        </div>
        <div className="flex items-start">
          <CheckCircleIcon className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">
            Experienced with various databases, including MongoDB, PostgreSQL,
            and MySQL.
          </h3>
        </div>
        <div className="flex items-start">
          <CheckCircleIcon className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">
            Skilled in leveraging cloud services such as AWS and GCP.
          </h3>
        </div>
        <div className="flex items-start">
          <CheckCircleIcon className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">
            Well-versed in fundamental web technologies like HTML, CSS, and
            JavaScript.
          </h3>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Tools and Technologies</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <CheckCircleIcon className="text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">Git & GitHub</h3>
          </div>
          <div className="flex items-start">
            <CheckCircleIcon className="text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">Material UI</h3>
          </div>
          <div className="flex items-start">
            <CheckCircleIcon className="text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">TailwindCSS</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
