import React, { useEffect, useRef } from "react";
import visibleAni from "../ultilities/visibleAni";

const knowledgeData = [
  "HTML & CSS",
  "Javascript",
  "TailwindCSS",
  "React",
  "Git & GitHub",
];

function Knowledge() {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  const knowledgeItems = knowledgeData.map((skill) => (
    <li key={skill} className="w-2/4 pb-6 pl-7">
      <div className="">
        <span className="paragraph-dot inline-block px-3 py-2 rounded bg-slate-50 shadow before:top-2/4 before:-translate-y-2/4  before:-left-4">
          {skill}
        </span>
      </div>
    </li>
  ));

  return (
    <section className="pb-11" id="knowledge" ref={sectionRef}>
      <h2 className="section-heading">
        My knowledge <span> 📖</span>
      </h2>
      <p className="py-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsam id
        porro ullam expedita sunt pariatur omnis animi rerum qui?
      </p>
      <ul className="flex flex-wrap">{knowledgeItems}</ul>
    </section>
  );
}

export default Knowledge;
