import React, { useEffect, useRef } from "react";
import visibleAni from "../../ultilities/visibleAni";
import KnowledgeList from "./KnowledgeList";

function Knowledge() {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  return (
    <section ref={sectionRef} className="tablet:clear-left">
      <h2 className="accent-border-l">My knowledge 📖</h2>
      <p className="para-max-w">
        Through my journey, I have gained a solid understanding of the Internet,
        computer, and web technologies. I also spent a lot of time applying
        these concepts to many scenarios and applications.
      </p>
      <KnowledgeList />
    </section>
  );
}

export default Knowledge;
