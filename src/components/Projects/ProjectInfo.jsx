import ProjectIcon from "./ProjectIcon";
import ProjectLink from "./ProjectLink";
import ProjectName from "./ProjectName";

function ProjectInfo({ name, iconUrl, description, url, completed }) {
  return (
    <div className="absolute bottom-0 translate-y-2/4 bg-slate-50 left-2/4 -translate-x-2/4 w-10/12 rounded-3xl shadow-lg overflow-hidden">
      <div className="pt-7 pb-[14px] px-7 bg-indigo-100">
        <ProjectIcon iconUrl={iconUrl} name={name} />
        <ProjectName name={name} />
        <p className="text-center py-6 text-indigo-700 tablet:text-base ">
          {description}
        </p>
      </div>
      <div className="text-center pt-[14px] pb-7 px-7">
        <ProjectLink url={url} completed={completed} />
      </div>
    </div>
  );
}

export default ProjectInfo;
