import React, { useEffect, useRef } from "react";
import visibleAni from "../../ultilities/visibleAni";
import KnowledgeItems from "./knowledgeList";

function Knowledge() {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  return (
    <section className="pb-11" id="knowledge" ref={sectionRef}>
      <h2 className="section-heading">
        My knowledge <span> 📖</span>
      </h2>
      <p className="py-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsam id
        porro ullam expedita sunt pariatur omnis animi rerum qui?
      </p>
      <KnowledgeItems />
    </section>
  );
}

export default Knowledge;
