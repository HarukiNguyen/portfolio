import { useEffect, useRef } from 'react';
import { projectsData } from '../../data/projectsData';
import visibleAni from '../../ultilities/visibleAni';
import ProjectList from './ProjectList';

function Projects() {
  const headingRef = useRef(null);

  useEffect(() => {
    visibleAni(headingRef.current, 'animate-fadeIn');
  }, []);

  return (
    <section>
      <h2 ref={headingRef} className="text-center">
        What I've been working on 💻
      </h2>
      <ul className="pt-10 laptop:grid laptop:grid-cols-12 laptop:gap-x-10 desktop:gap-x-14">
        <ProjectList projectsData={projectsData} />
      </ul>
    </section>
  );
}

export default Projects;
