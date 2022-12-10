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
        key={name}
        className="pb-[220px] w-10/12 opacity-0 tablet:w-8/12 laptop:w-2/4 laptop:px-5 desktop:px-14"
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
