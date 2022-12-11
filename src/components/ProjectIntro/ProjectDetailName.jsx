import linkIcon from "../../assets/icons/link.svg";

function ProjectDetailName({ url, detailName }) {
  return (
    <div className="pb-10">
      <a
        href={url}
        alt={detailName}
        className="group rounded px-2 py-1 -mx-2 -my-1 hover:text-slate-600 hover:underline focus:bg-slate-200 focus:outline-none"
      >
        <h1 className="inline pb-0">{detailName}</h1>
        <div className="inline-block align-baseline">
          <img src={linkIcon} alt="Link icon" className="block pl-3 w-10" />
        </div>
      </a>
    </div>
  );
}

export default ProjectDetailName;
