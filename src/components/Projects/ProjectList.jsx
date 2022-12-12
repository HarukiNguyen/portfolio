import { useEffect, useRef } from "react";
import visibleAni from "../../ultilities/visibleAni";
import ProjectInfo from "./ProjectInfo";

function ProjectList({ projectsData }) {
  const projectsRef = useRef([]);

  useEffect(() => {
    visibleAni(projectsRef.current, "animate-fadeIn");
  }, [projectsData]);

  const projectItems = projectsData.map((project, index) => {
    const { name, iconUrl, description, completed, url, thumbnailUrl } =
      project;

    return (
      <li
        key={index}
        className="pb-[240px] max-[350px]:w-full mx-auto opacity-0 w-10/12 tablet:w-8/12 laptop:w-auto laptop:col-span-6 desktop:px-10"
        ref={(el) => (projectsRef.current[index] = el)}
      >
        <div className="relative">
          <img src={thumbnailUrl} alt={name} className="rounded-3xl" />
          <ProjectInfo
            name={name}
            iconUrl={iconUrl}
            description={description}
            url={url}
            completed={completed}
          />
        </div>
      </li>
    );
  });

  return <>{projectItems}</>;
}

export default ProjectList;
