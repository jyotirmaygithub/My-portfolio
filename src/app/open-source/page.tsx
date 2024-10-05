import OpenSourceSection from '@/Layout/open-source';
import {open_Source_Projects} from "../../Data/projects"

const ProjectsPage: React.FC = () => {
  return (
    <div className='m-2 sm:m-5 md:m-10 xl:m-24'>
      {open_Source_Projects.map((project, index) => (
        <OpenSourceSection key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
