import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function Project({
  projectType,
  title,
  description,
  tools,
  githubUrl,
  liveDemoUrl,
}: {
  projectType?: string;
  title: string;
  description: string;
  tools: string[];
  githubUrl: string;
  liveDemoUrl?: string;
}) {
  return (
    <div className="flex-col my-20 justify-center items-center space-x-5 ">
      <div className="flex flex-col m-4" >
        <h1 className="text-2xl font-bold">{projectType}</h1>
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="bg-white p-4 rounded shadow-md">
          <p className=" text-black overflow-hidden">{description}</p>
        </div>

        <ul className="flex text-white list-none space-x-5 mt-4">
          {tools.map((tool, index) => (
            <li key={index} className="bg-gray-200 px-2 py-1 rounded">{tool}</li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 flex items-center space-x-2"
          >
            <GitHubIcon />
          </a>
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 flex items-center space-x-2"
          >
            <ArrowCircleRightOutlinedIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
