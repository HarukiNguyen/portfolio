import { useEffect, useRef } from "react";
import visibleAni from "../../ultilities/visibleAni";

function ProjectPreview({ previewImg }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  const imgs = previewImg.map((img, index) => {
    return (
      <li key={index} className="pb-14 px-10 tablet:px-0">
        <img
          src={img}
          alt="Preview image"
          className="mx-auto rounded-md shadow-3xl"
        />
      </li>
    );
  });

  return (
    <section ref={sectionRef}>
      <h2 className="visually-hidden">Preview images</h2>
      <ul className="tablet:columns-2 tablet:gap-14">{imgs}</ul>
    </section>
  );
}

export default ProjectPreview;
