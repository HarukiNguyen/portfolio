import { useEffect, useRef } from "react";
import visibleAni from "../ultilities/visibleAni";

function ProjectTechExplain({ techAndExplain }) {
  const explanativeLength = techAndExplain.length;
  const itemClassNames =
    explanativeLength > 1 ? "pb-5 paragraph-dot pd-lt" : "";
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  return (
    <section ref={sectionRef} className="para-max-w ml-auto">
      <h2 className="accent-border-l">🔍 Web stack and explanation</h2>
      <ul>
        {techAndExplain.map((explainPara, index) => (
          <li key={index} className={`${itemClassNames}`}>
            <p>{explainPara}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectTechExplain;
