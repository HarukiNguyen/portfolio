import { projectsData } from "../../data/projectsData";
import ProjectList from "./ProjectList";

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-heading">
        What I've been working on <span>💻</span>
      </h2>
      <ProjectList projectsData={projectsData} />
    </section>
  );
}

export default Projects;
