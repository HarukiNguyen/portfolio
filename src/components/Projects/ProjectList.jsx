import { useEffect, useRef } from "react";
import visibleAni from "../../ultilities/visibleAni";
import ProjectInfo from "./ProjectInfo";

function ProjectList({ projectsData }) {
  const projectsRef = useRef([]);

  useEffect(() => {
    visibleAni(projectsRef.current, "animate-fadeIn");
  }, []);

  const projectItems = projectsData.map((project, index) => {
    const { name, iconUrl, description, completed, url, thumbnailUrl } =
      project;

    return (
      <li
        key={name}
        className="pb-[175px] w-10/12 opacity-0"
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

  return (
    <ul className="flex justify-center flex-wrap pt-16">{projectItems}</ul>
  );
}

export default ProjectList;
