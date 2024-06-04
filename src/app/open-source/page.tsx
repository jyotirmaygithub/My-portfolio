import OpenSourceSection from '@/Layout/open-source';

const projects = [
  {
    title: 'Gitfile',
    description: 'This project is a web-based GitHub file visualizer. It takes a GitHub repository and displays a visual representation of its folders and files directly in the browser. This visualization helps developers navigate and understand the structure of a codebase more easily.The project prioritizes user privacy by generating fresh access tokens for interacting with the GitHub API. These tokens are short-lived and avoid storing sensitive information. Additionally, the user interface is built with Tailwind CSS, a framework that promotes secure and responsive web design.This visual representation can be particularly beneficial for complex projects, allowing developers to navigate the codebase with greater ease. It can also improve understanding of the overall project structure and simplify onboarding for new developers.For future enhancements, consider adding customization options for the visual style and potentially include features like file type filtering or folder highlighting. Overall, this project provides a valuable tool for developers to explore and interact with GitHub repositories in a more intuitive way.',
    tools: ['Next.js','Node.js','Typescript','TailwindCSS'],
    githubUrl: 'https://github.com/BalajiSriraman/Git-File',
    liveDemoUrl: 'https://gitfile.vercel.app/',
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <OpenSourceSection key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
