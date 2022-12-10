import linkIcon from "../../assets/icons/link.svg";
import { Link } from "react-router-dom";

function ProjectLink({ url, completed }) {
  const linkText = completed ? "view project" : "comming soon";

  return (
    <div className="text-center">
      <Link
        to={`${url}`}
        tabIndex={completed ? 0 : -1}
        className={`${
          !completed ? "disable-link text-slate-400 no-underline" : ""
        } group px-2 py-1 rounded relative underline uppercase font-bold hover:text-slate-600 focus:bg-slate-200 focus:outline-none `}
      >
        {linkText}
        <img
          src={linkIcon}
          alt="Link icon"
          className="scale-0 absolute w-6 left-full pl-1 top-2/4 -translate-y-2/4 group-hover:scale-100 group-focus:scale-100 transition-transform origin-[left_center]"
        />
      </Link>
    </div>
  );
}

export default ProjectLink;
