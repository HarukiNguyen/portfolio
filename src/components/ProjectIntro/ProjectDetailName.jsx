import linkIcon from "../../assets/icons/link.svg";

function ProjectDetailName({ url, detailName }) {
  return (
    <div className="pb-10">
      <a
        href={url}
        alt={detailName}
        className="group px-2 py-1 -mx-2 -my-1 hover:text-slate-600 focus:bg-slate-50 focus:outline-none transition-colors"
      >
        <h1 className="inline pb-0">{detailName}</h1>
        <div className="inline-flex items-center">
          <img src={linkIcon} alt="Link icon" className="block pl-3 w-10" />
        </div>
      </a>
    </div>
  );
}

export default ProjectDetailName;
