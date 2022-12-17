import { useEffect, useRef } from 'react';
import visibleAni from '../../ultilities/visibleAni';
import ProjectInfo from './ProjectInfo';

function ProjectList({ projectsData }) {
  const projectsRef = useRef([]);

  useEffect(() => {
    visibleAni(projectsRef.current, 'animate-fadeIn');
  }, [projectsData]);

  const projectItems = projectsData.map((project, index) => {
    const { name, iconUrl, description, completed, url, thumbnailUrl } =
      project;

    return (
      <li
        key={index}
        className="mx-auto w-10/12 pb-[240px] opacity-0 max-[350px]:w-full tablet:w-8/12 laptop:col-span-6 laptop:w-auto desktop:px-10"
        ref={(el) => (projectsRef.current[index] = el)}
      >
        <div className="relative">
          <img
            src={thumbnailUrl}
            alt={name}
            className="rounded-3xl border-[1px] shadow"
          />
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
