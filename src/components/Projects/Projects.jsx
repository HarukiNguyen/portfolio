import computerIcon from "../../assets/icons/computer.svg";
import linkIcon from "../../assets/icons/link-16.png";
import { projects } from "./projectsData";

function Projects() {
  const projectItems = projects.map((project) => {
    const { name, iconUrl, description, completed, url, thumbnailUrl } =
      project;

    const linkText = completed ? "view project" : "comming soon";

    return (
      <li key={name} className="pb-40">
        <div className="relative">
          <img src={thumbnailUrl} alt={name} className="rounded-3xl" />
          <div className="absolute bottom-0 translate-y-2/4 h-52 bg-slate-50 left-2/4 -translate-x-2/4 w-10/12 px-7 py-6 rounded-3xl shadow-lg">
            <span className="flex justify-center pb-3">
              <img src={iconUrl} alt={`${name} icon`} className="w-8" />
            </span>
            <div className="flex justify-center">
              <h3 className="inline-block heading text-underline text-2xl">
                {name}{" "}
              </h3>
            </div>
            <p className="text-center pt-3">{description}</p>
            <div className="text-center pt-3">
              <a
                href={url}
                className="group px-2 py-1 rounded relative underline uppercase font-bold hover:text-slate-600 focus:bg-slate-200 focus:outline-none"
              >
                {linkText}
                <img
                  src={linkIcon}
                  alt={name}
                  className="hidden absolute left-full pl-1 top-2/4 -translate-y-2/4 group-hover:inline-block group-focus:inline-block"
                />
              </a>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <section className="pb-11" id="projects">
      <h2 className="section-heading">
        What I've been working on <span>💻</span>
      </h2>
      <ul className="pt-6">{projectItems}</ul>
    </section>
  );
}

export default Projects;
