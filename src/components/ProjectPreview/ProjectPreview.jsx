import { useEffect, useRef } from "react";
import visibleAni from "../../ultilities/visibleAni";
import getCol from "./getCols";
import getImgItems from "./getImgItems";
import PreviewImageList from "./PreviewImageList";

function ProjectPreview({ previewImg }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  const cols = getCol(getImgItems, previewImg, 2, 2);

  return (
    <section ref={sectionRef}>
      <h2>Preview images</h2>
      <PreviewImageList imageItems={cols} />
    </section>
  );
}

export default ProjectPreview;
