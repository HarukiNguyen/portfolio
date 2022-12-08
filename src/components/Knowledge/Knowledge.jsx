import React, { useEffect, useRef } from "react";
import visibleAni from "../../ultilities/visibleAni";
import KnowledgeList from "./KnowledgeList";

function Knowledge() {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  return (
    <section id="knowledge" ref={sectionRef} className="tablet:clear-left">
      <h2>
        My knowledge <span> 📖</span>
      </h2>
      <p className="max-w-[550px]">
        Through my journey, I have gained a solid understanding of the Internet,
        computer, and web technologies. I also spent a lot of time applying
        these concepts to many scenarios and applications.
      </p>
      <KnowledgeList />
    </section>
  );
}

export default Knowledge;
