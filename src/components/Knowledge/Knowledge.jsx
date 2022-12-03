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
        Through my journey, I have gained a solid understanding of the Internet,
        computer, and web technologies. I also spent a lot of time applying
        these concepts to many scenarios and applications.
      </p>
      <KnowledgeItems />
    </section>
  );
}

export default Knowledge;
