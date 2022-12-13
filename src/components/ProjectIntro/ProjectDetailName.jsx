import LinkIcon from '../LinkIcon';

function ProjectDetailName({ url, detailName }) {
  return (
    <div className="pb-10">
      <a
        href={url}
        alt={detailName}
        className="group hover:text-indigo-400 hover:underline focus:outline-none"
      >
        <h1 className="group-focus:hocus-state -mx-2 -my-1 inline rounded px-2 py-1">
          {detailName}
        </h1>
        <div className="inline-block pl-3 align-baseline transition-transform group-hover:scale-110">
          <LinkIcon className="h-7 w-7" />
        </div>
      </a>
    </div>
  );
}

export default ProjectDetailName;
