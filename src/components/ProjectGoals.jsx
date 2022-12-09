import { useRef, useEffect } from "react";
import visibleAni from "../ultilities/visibleAni";

function ProjectGoals({ goals }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  return (
    <section ref={sectionRef}>
      <h2>Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index} className="pb-4 para-max-w">
            <p>{goal}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectGoals;
