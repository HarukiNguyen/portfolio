import { useEffect, useRef } from "react";
import visibleAni from "../../ultilities/visibleAni";

function ProjectPreview({ previewImg }) {
  const headingRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    visibleAni(projectsRef.current, "animate-fadeIn");
    visibleAni(headingRef.current, "animate-fadeIn");
  }, []);

  return (
    <section>
      <h2 ref={headingRef}>Preview images</h2>
      <ul className="pt-10 flex justify-center flex-wrap">
        {previewImg.map((image, index) => (
          <li
            key={index}
            className="w-10/12 pb-10"
            ref={(el) => (projectsRef.current[index] = el)}
          >
            <img
              src={image}
              alt="Preview image"
              className="rounded-md shadow-3xl"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectPreview;
