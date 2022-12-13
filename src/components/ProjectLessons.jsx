import { useEffect, useRef } from 'react';
import visibleAni from '../ultilities/visibleAni';

function ProjectLessons({ lessons }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, 'animate-fadeIn');
  }, []);

  return (
    <section className="text-center" ref={sectionRef}>
      <h2 className="accent-border-b">Problems and lessons 📚</h2>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index} className="para-max-w mx-auto pb-5">
            {lesson}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectLessons;
