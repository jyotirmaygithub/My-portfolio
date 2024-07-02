import ProjectSection from '@/Layout/project';

const projects = [
  {
    projectType : "Full Stack Project",
    title: 'ComfortQuest',
    description: 'Empowering users to browse and register hotels, securely upload images, and efficiently manage data with advanced CRUD operations in MongoDB Implemented a robust cancellation policy where users can cancel hotel bookings with a 40% charge, optimizing revenue management and user satisfaction. Built a seamless hotel booking system with a reservation visualization route.Designed a user dashboard for profile viewing and updates, utilizing Node.js and Cloudinary for efficient data handling and storage.Ensure all user inputs meet predefined criteria to maintain data accuracy andintegrity.',
    tools: ['React.js','MongoDB','Node.js','Cloudinary','Material-UI',
     ],
    githubUrl: 'https://github.com/jyotirmaygithub/Hotels',
    screenshotSrc: '/Images/hotels .png',
  },
  {
    projectType : "Full Stack Project",
    title: 'Api-Management-System',
    description: 'Welcome to our API Management System! To access our APIs securely, create an API key and obtain an auth token after logging in (ensure cookies are enabled). Refer to our API documentation for details and include both the API key and auth token in your request headers for authentication.',
    tools: ['React.js', 'MongoDB', 'Node.js','Authorization','Visualization'],
    githubUrl: 'https://github.com/jyotirmaygithub/Api-Management-System',
    liveDemoUrl: 'https://api-management-system.netlify.app/',
    screenshotSrc: '/Images/api.png',
  },
  {
    projectType : "Full Stack Project",
    title: 'Task management system',
    description: 'Built with React, Express, Node.js, and MongoDB Atlas. The frontend, deployed on Netlify, uses Material UI and Tailwind CSS. It features Google OAuth and JWT for user authentication. Users can create tasks, view all tasks, assign themselves to tasks, and access routes for archived tasks, tasks they have created, and tasks assigned to them.',
    tools: ['React.js', 'MongoDB', 'Node.js','Endpoints','OAuth'],
    githubUrl: 'https://github.com/jyotirmaygithub/Task-Management-System',
    liveDemoUrl: 'https://for-tasks-management.netlify.app/',
    screenshotSrc: '/Images/task.png',
  },
  {
    projectType : "Frontend Project",
    title: 'Explore-Hub ',
    description: 'Developed an application with HTML, CSS, and React JS. Utilized React Router and Context API for seamless navigation, managed form submissions proficiently, and implemented a powerful search function akin to Google for enhanced user experience and functionality',
    tools: ['HTML','CSS','Javascript','React.js', 'TailwindCSS'],
    githubUrl: 'https://github.com/jyotirmaygithub/Explore-Hub',
    liveDemoUrl: 'https://react-explore-hub.netlify.app/',
    screenshotSrc: '/Images/searcher.png',
  },
  {
    projectType : "Frontend Project",
    title: 'PixelBlend',
    description: 'I developed a wallpaper project using React.js and Material UI, enabling users to seamlessly download, view full-page details, and utilize a modal for a closer look. Additionally, I implemented a search feature for enhanced usability.',
    tools: ['HTML','CSS','Javascript','React.js', 'TailwindCSS'],
    githubUrl: 'https://github.com/jyotirmaygithub/PixelBlend',
    liveDemoUrl: 'https://wallpaper-studio.netlify.app/',
    screenshotSrc: '/Images/wallpaper.png',
  },
  // Add other project objects here
];

const ProjectsPage: React.FC = () => {
  return (
    <div className='flex justify-center items-center flex-wrap lg:justify-between m-2 lg:m-24'>
      {projects.map((project, index) => (
        <ProjectSection key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
