import { useEffect, useRef } from "react";
import visibleAni from "../../../ultilities/visibleAni";
import OtherProjects from "./OtherProjectsList";

function OtherProjectsList({ param }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  return (
    <section ref={sectionRef}>
      <h2>Other projects</h2>
      <OtherProjects param={param} />
    </section>
  );
}

export default OtherProjectsList;
