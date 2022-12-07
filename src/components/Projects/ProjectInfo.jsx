import ProjectIcon from "./ProjectIcon";
import ProjectLink from "./ProjectLink";
import ProjectName from "./ProjectName";

function ProjectInfo({ name, iconUrl, description, url, completed }) {
  return (
    <div className="absolute bottom-0 translate-y-2/4 bg-slate-50 left-2/4 -translate-x-2/4 w-10/12 px-7 py-6 rounded-3xl shadow-lg">
      <ProjectIcon iconUrl={iconUrl} name={name} />
      <ProjectName name={name} />
      <p className="text-center pt-3">{description}</p>
      <ProjectLink url={url} completed={completed} />
    </div>
  );
}

export default ProjectInfo;
