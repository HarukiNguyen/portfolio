import { useEffect, useRef, useState } from "react";
import visibleAni from "../../ultilities/visibleAni";
import OtherProjectsList from "./OtherProjectsList";

function OtherProjects({ param }) {
  const sectionRef = useRef(null);
  const [otherProjectsLength, setOtherProjectsLength] = useState(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  return (
    <section ref={sectionRef}>
      <h2 className={`${otherProjectsLength > 1 ? "" : "text-center"}`}>
        Other projects 💻
      </h2>
      <OtherProjectsList
        setOtherProjectsLength={setOtherProjectsLength}
        param={param}
      />
    </section>
  );
}

export default OtherProjects;
