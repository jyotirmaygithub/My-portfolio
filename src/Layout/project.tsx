import { Image } from "@nextui-org/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function Project({
  projectType,
  title,
  description,
  tools,
  githubUrl,
  liveDemoUrl,
  screenshotSrc,
}: {
  projectType: string;
  title: string;
  description: string;
  tools: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  screenshotSrc: string;
}) {
  return (
    <section className="flex flex-col m-4 md:flex-row my-20 mx-10 md:mx-20 justify-center items-center space-y-5 md:space-x-5 ">
      <div className="flex flex-col ">
        <h1 className="text-2xl font-bold">{projectType}</h1>
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="bg-white  p-4 rounded shadow-md">
          <p className="text-black overflow-hidden">{description}</p>
        </div>

        <ul className="flex flex-wrap text-white list-none mt-4">
          {tools.map((tool, index) => (
            <li key={index} className="bg-gray-200 px-3 py-1 rounded my-1 mr-2">{tool}</li>
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
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 flex items-center space-x-2"
            >
              <ArrowCircleRightOutlinedIcon />
            </a>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Image
          className="rounded"
          width={500} // Set a larger fixed width for the image
          height={400} // Set a larger fixed height for the image
          alt="Project Screenshot"
          src={screenshotSrc}
        />
      </div>
    </section>
  );
}
