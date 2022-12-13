import ProjectIcon from './ProjectIcon';
import ProjectLink from './ProjectLink';
import ProjectName from './ProjectName';

function ProjectInfo({ name, iconUrl, description, url, completed }) {
  return (
    <div className="absolute bottom-0 left-2/4 w-10/12 translate-y-2/4 -translate-x-2/4 overflow-hidden rounded-3xl bg-slate-50 shadow-lg">
      <div className="bg-indigo-100 px-7 pt-7 pb-[14px]">
        <ProjectIcon iconUrl={iconUrl} name={name} />
        <ProjectName name={name} />
        <p className="py-6 text-center text-indigo-700 tablet:text-base ">
          {description}
        </p>
      </div>
      <div className="px-7 pt-[14px] pb-7 text-center">
        <ProjectLink url={url} completed={completed} />
      </div>
    </div>
  );
}

export default ProjectInfo;
