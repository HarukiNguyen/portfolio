import React, { useEffect, useRef } from "react";
import visibleAni from "../../ultilities/visibleAni";
import KnowledgeList from "./KnowledgeList";
import worldMap from "../../assets/images/world-map.svg";

function Knowledge() {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  return (
    <section
      ref={sectionRef}
      className="tablet:clear-left laptop:grid laptop:grid-cols-12"
    >
      <div className="laptop:col-span-6 desktop:col-span-6">
        <h2 className="accent-border-l">My knowledge 📖</h2>
        <p className="para-max-w">
          Through my journey, I have gained a solid understanding of the
          Internet, computer, and web technologies. I also spent a lot of time
          applying these concepts to many scenarios and applications.
        </p>
        <KnowledgeList />
      </div>
      <div className="hidden laptop:block laptop:col-span-5 laptop:col-start-8">
        <img src={worldMap} alt="World map" />
      </div>
    </section>
  );
}

export default Knowledge;
