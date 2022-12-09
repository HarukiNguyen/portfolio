import { useEffect, useRef } from "react";
import visibleAni from "../../ultilities/visibleAni";
import OtherProjectsList from "./OtherProjectsList";

function OtherProjects({ param }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  return (
    <section ref={sectionRef}>
      <h2>Other projects</h2>
      <OtherProjectsList param={param} />
    </section>
  );
}

export default OtherProjects;
