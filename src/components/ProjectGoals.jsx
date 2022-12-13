import { useRef, useEffect } from 'react';
import visibleAni from '../ultilities/visibleAni';

function ProjectGoals({ goals }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, 'animate-fadeIn');
  }, []);

  return (
    <section ref={sectionRef}>
      <h2 className="accent-border-l">Goals 🚩</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index} className="para-max-w pb-4">
            <p>{goal}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectGoals;
