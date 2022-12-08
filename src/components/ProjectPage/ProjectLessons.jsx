import { useEffect, useRef } from "react";
import visibleAni from "../../ultilities/visibleAni";

function ProjectLessons({ lessons }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  return (
    <section className="text-center" ref={sectionRef}>
      <h2>Problems and lessons</h2>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index} className="pb-5 para-max-w mx-auto">
            {lesson}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectLessons;
