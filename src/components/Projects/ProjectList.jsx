import ProjectInfo from "./ProjectInfo";
import { projects } from "./projectsData";

function ProjectList() {
  const projectItems = projects.map((project, index) => {
    const { name, iconUrl, description, completed, url, thumbnailUrl } =
      project;

    const linkText = completed ? "view project" : "comming soon";

    return (
      <li key={name} className="pb-[175px] w-10/12">
        <div className="relative">
          <img src={thumbnailUrl} alt={name} className="rounded-3xl" />
          <div className="absolute bottom-0 translate-y-2/4 bg-slate-50 left-2/4 -translate-x-2/4 w-10/12 px-7 py-6 rounded-3xl shadow-lg">
            <ProjectInfo
              name={name}
              iconUrl={iconUrl}
              description={description}
              url={url}
              linkText={linkText}
            />
          </div>
        </div>
      </li>
    );
  });

  return (
    <ul className="flex justify-center flex-wrap pt-16">{projectItems}</ul>
  );
}

export default ProjectList;
