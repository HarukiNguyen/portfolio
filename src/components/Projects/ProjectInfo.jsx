import linkIcon from "../../assets/icons/link.svg";
import ProjectIcon from "./ProjectIcon";
import ProjectName from "./ProjectName";
import ProjectLink from "./ProjectLink";

function ProjectInfo({ name, iconUrl, description, linkText, url }) {
  return (
    <div className="absolute bottom-0 translate-y-2/4 bg-slate-50 left-2/4 -translate-x-2/4 w-10/12 px-7 py-6 rounded-3xl shadow-lg">
      <ProjectIcon iconUrl={iconUrl} name={name} />
      <ProjectName name={name} />
      <p className="text-center pt-3">{description}</p>
      <ProjectLink
        url={url}
        linkText={linkText}
        linkIcon={linkIcon}
        name={name}
      />
    </div>
  );
}

export default ProjectInfo;
