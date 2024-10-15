export const projects = [
  {
    title: "ComfortQuest",
    desc: "Empower users to browse and register hotels, securely upload images, and manage data with advanced MongoDB CRUD operations. Implement a 40% cancellation charge to optimize revenue and satisfaction.",

    subdesc:
      "Create a seamless booking system with reservation visualization. Design a user dashboard for profile updates using Node.js and Cloudinary, ensuring data accuracy and integrity.",
    logoStyle: {
      backgroundColor: "#6d4c41", // Background color behind the logo
      border: "0.2px solid #36201D", // Border
      boxShadow: "0 0 60px rgba(170, 60, 48, 0.3)", // Shadow
      padding: "0.75rem", // Padding around the logo
      display: "inline-block", // Make the wrapper fit the content
      borderRadius: "4px", // Optional: rounded corners
    },
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#FFFFFF"
        // className="p-3 bg-[#6d4c41]  border-[0.2px] border-[#36201D] shadow-[0_0_60px_0_rgba(170,60,48,0.3)]"
      >
        <path d="M40-200v-600h80v400h320v-320h320q66 0 113 47t47 113v360h-80v-120H120v120H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 40h320v-160q0-33-23.5-56.5T760-640H520v240ZM280-520q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-40Zm240-80v240-240Z" />
      </svg>
    ),
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/express.png",
      },
      {
        id: 4,
        name: "Node js",
        path: "/assets/nodejs.png",
      },
    ],
    githubUrl: "https://github.com/jyotirmaygithub/Hotels",
    screenshotSrc: "/Images/hotels .png",
  },
  {
    title: "Token Manipulation Smart Contract",
    desc: "This smart contract provides functionality for managing user profiles and token manipulation on the Internet Computer.",

    subdesc:
      "It includes functions for creating user profiles, assigning tokens, transferring tokens, burning tokens, and minting new tokens.",
    logoStyle: {
      backgroundColor: "#6d4c41", // Background color behind the logo
      border: "0.2px solid #36201D", // Border
      boxShadow: "0 0 60px rgba(170, 60, 48, 0.3)", // Shadow
      padding: "0.75rem", // Padding around the logo
      display: "inline-block", // Make the wrapper fit the content
      borderRadius: "4px", // Optional: rounded corners
    },
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#FFFFFF"
      >
        <path d="M480-80 120-280v-400l360-200 360 200v400L480-80ZM364-590q23-24 53-37t63-13q33 0 63 13t53 37l120-67-236-131-236 131 120 67Zm76 396v-131q-54-14-87-57t-33-98q0-11 1-20.5t4-19.5l-125-70v263l240 133Zm40-206q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm40 206 240-133v-263l-125 70q3 10 4 19.5t1 20.5q0 55-33 98t-87 57v131Z" />
      </svg>
    ),
    tags: [
      {
        id: 1,
        name: "Rust",
        path: "/assets/rust.png",
      },
      {
        id: 2,
        name: "icp",
        path: "/assets/icp.png",
      },
    ],
    githubUrl:
      "https://github.com/jyotirmaygithub/Token-Manipulation-Smart-Contract",
    screenshotSrc: "/assets/rust.png",
  },
  {
    title: "Api-Management-System",
    desc: "Welcome to our API Management System! Securely access our APIs by creating an API key and obtaining an auth token after logging in (ensure cookies are enabled).",
    subdesc:
      "Refer to our API documentation for details. Include both the API key and auth token in your request headers for authentication.",
    logoStyle: {
      backgroundColor: "#6d4c41", // Background color behind the logo
      border: "0.2px solid #36201D", // Border
      boxShadow: "0 0 60px rgba(170, 60, 48, 0.3)", // Shadow
      padding: "0.75rem", // Padding around the logo
      display: "inline-block", // Make the wrapper fit the content
      borderRadius: "4px", // Optional: rounded corners
    },
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#FFFFFF"
      >
        <path d="M480-383.33 383.33-480 480-576.67 576.67-480 480-383.33Zm-85-274.34-88.67-88.66L480-920l173.67 173.67L565-657.67l-85-85-85 85ZM213.67-306.33 40-480l173.67-173.67L302.33-565l-85 85 85 85-88.66 88.67Zm532.66 0L657.67-395l85-85-85-85 88.66-88.67L920-480 746.33-306.33ZM480-40 306.33-213.67 395-302.33l85 85 85-85 88.67 88.66L480-40Z" />
      </svg>
    ),
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Nodejs",
        path: "/assets/nodejs.png",
      },
    ],
    githubUrl: "https://github.com/jyotirmaygithub/Api-Management-System",
    liveDemoUrl: "https://api-management-system.netlify.app/",
    screenshotSrc: "/Images/api.png",
  },
];

export const open_Source_Projects = [
  {
    title: "Git-file",
    desc: "This project visualizes GitHub repositories in a web-based interface, displaying folders and files directly in the browser. It enhances codebase navigation and understanding while ensuring user privacy by generating short-lived access tokens for GitHub API interactions.",
    subdesc:
      "Built with Tailwind CSS, the interface supports secure and responsive design. This tool simplifies complex project navigation, improves project structure comprehension, and aids new developer onboarding. Future enhancements may include visual customization, file type filtering, and folder highlighting, making it a valuable resource for exploring GitHub repositories intuitively.",
    tags: [
      {
        id: 1,
        name: "nexjs",
        path: "/assets/nextjs2.png",
      },
      {
        id: 2,
        name: "tailwind",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "typescript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "nodejs",
        path: "/assets/nodejs.png",
      },
    ],
    githubUrl: "https://github.com/BalajiSriraman/Git-File",
    liveDemoUrl: "https://gitfile.vercel.app/",
  },
];

export const educationData = [
  {
    title: "Lovely Professional University",
    degree: "Bachelor of Computer Applications (BCA)",
    graduation: "Expected Graduation: 2022-2025",
    keyLearnings: [
      "Studied and gained expertise in MERN (MongoDB, Express.js, React.js, Node.js) stack for full-stack web development.",
      "Explored Data Structures and Algorithms (DSA) extensively using Java, enhancing problem-solving skills and algorithmic thinking.",
    ],
  },
  {
    title: "School Education",
    degree: "Kala Niketan",
    graduation: "Completed 10th and 12th grades",
    keyLearnings: [
      "Acquired fundamental knowledge in various subjects, laying the groundwork for further academic pursuits.",
      "Developed critical thinking and problem-solving skills through coursework and extracurricular activities.",
    ],
  },
];

export const experienceData = [
  {
    company: "QUADB TECHNOLOGIES",
    role: "Software Engineer Intern",
    duration: "August '24 - present",
    responsibilities:
      "Developed a dynamic frontend for a dating site using React, Yup, React Hook Form, sockets for real-time messaging, and Firebase, enhancing user engagement and experience Spearheading backend development for a Web 3 project using Rust, focusing on secure and efficient decentralized applications with optimal memory management.",
    tags: [
      {
        id: 1,
        name: "react",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "tailwind",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "nodejs",
        path: "/assets/nodejs.png",
      },
      {
        id: 4,
        name: "rust",
        path: "/assets/rust.png",
      },
      {
        id: 4,
        name: "icp",
        path: "/assets/icp.png",
      },
    ],
  },
  {
    company: "CRESENZA",
    role: "Software Intern",
    duration: "June '24 - August '24",
    responsibilities:
      "Develop and optimize pipelines for lint. Design and implement front-end components for an e-commerce project using React Js. Contribute to agile development processes, including sprint planning and daily stand-ups.",
    tags: [
      {
        id: 1,
        name: "react",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "tailwind",
        path: "/assets/tailwindcss.png",
      },
    ],
  },
];

// data.js

export const aboutMeText = {
  heading: "About Me",
  paragraphs: [
    "I am currently pursuing a Bachelors in Computer Applications at Lovely Professional University. While I have a solid grasp of coding and web development, particularly in Full Stack technologies like MERN (MongoDB, Express.js, React.js, Node.js), I am eager to explore beyond these boundaries.",
    "In addition to my technical skills, I have a deep passion for swimming and reading. To broaden my horizons, I have actively engaged in two societies, OASIS and DRAGCON, where I am dedicated to improving my communication abilities. Alongside this, I allocate time to immerse myself in books across various disciplines such as sociology, history, economics, psychology, and philosophy. These readings not only enhance my understanding of the world and myself but also cultivate critical thinking and creativity."
  ]
};

// skillsData.js

export const skills = [
  { src: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png", alt: "HTML" },
  { src: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png", alt: "CSS" },
  { src: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png", alt: "JavaScript" },
  { src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", alt: "React" },
  { src: "https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-2/15/nextjs-64.png", alt: "Next.js", bg: "bg-white" },
  { src: "https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png", alt: "TypeScript" },
  { src: "https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png", alt: "MongoDB", bg: "bg-white" },
  { src: "https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png", alt: "Node.js", bg: "bg-white" },
  { src: "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png", alt: "MySQL", bg: "bg-white" },
];

export const skillDetails = [
  "Proficient in full stack development using the MERN stack (MongoDB, Express.js, React, Node.js).",
  "Expertise in using Next.js for server-side rendering and TypeScript for static typing.",
  "Experienced with various databases, including MongoDB, PostgreSQL, and MySQL.",
  "Skilled in leveraging cloud services such as AWS and GCP.",
  "Well-versed in fundamental web technologies like HTML, CSS, and JavaScript.",
];

export const toolsAndTech = [
  "Git & GitHub",
  "Material UI",
  "TailwindCSS",
];

// javaSkillsData.js

export const javaSkills = [
  "Proficient in Java programming language.",
  "Solid understanding of Object-Oriented Programming (OOP) principles.",
  "Knowledge of common data structures like arrays, linked lists, stacks, queues, trees, and graphs.",
  "Familiarity with basic algorithms such as searching and sorting.",
];

export const javaToolsAndTech = [
  "IDEs (IntelliJ IDEA, Eclipse)",
  "Version Control Systems (Git)",
];



