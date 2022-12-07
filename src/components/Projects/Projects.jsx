import { useEffect, useRef } from "react";
import { projectsData } from "../../data/projectsData";
import visibleAni from "../../ultilities/visibleAni";
import ProjectList from "./ProjectList";

function Projects() {
  const headingRef = useRef(null);

  useEffect(() => {
    visibleAni(headingRef.current, "animate-fadeIn");
  }, []);

  return (
    <section id="projects">
      <h2 ref={headingRef}>
        What I've been working on <span>💻</span>
      </h2>
      <ProjectList projectsData={projectsData} />
    </section>
  );
}

export default Projects;
