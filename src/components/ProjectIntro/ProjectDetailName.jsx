import LinkIcon from "../LinkIcon";

function ProjectDetailName({ url, detailName }) {
  return (
    <div className="pb-10">
      <a
        href={url}
        alt={detailName}
        className="group hover:text-indigo-400 hover:underline focus:outline-none"
      >
        <h1 className="inline px-2 py-1 -mx-2 -my-1 group-focus:hocus-state rounded">
          {detailName}
        </h1>
        <div className="pl-3 inline-block align-baseline group-hover:scale-110 transition-transform">
          <LinkIcon className="h-7 w-7" />
        </div>
      </a>
    </div>
  );
}

export default ProjectDetailName;
