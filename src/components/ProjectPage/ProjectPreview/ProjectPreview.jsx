import { useEffect, useRef, useState } from "react";
import visibleAni from "../../../ultilities/visibleAni";
import PreviewImage from "./PreviewImage";

function ProjectPreview({ previewImg }) {
  const sectionRef = useRef(null);
  const [imgLength, setImgLength] = useState(null);
  const [firstColImgAmout, setFirstColImgAmout] = useState(null);

  useEffect(() => {
    visibleAni(sectionRef.current, "animate-fadeIn");
  }, []);

  useEffect(() => {
    setImgLength(previewImg.length);
    if (imgLength) {
      setFirstColImgAmout(Math.ceil(imgLength / 2));
    }
  }, [previewImg, imgLength, firstColImgAmout]);

  const firstCol = (
    <>
      {previewImg.map((image, index) => {
        if (index < firstColImgAmout) {
          return <PreviewImage image={image} key={index} />;
        } else {
          return null;
        }
      })}
    </>
  );

  const secondCol = (
    <>
      {previewImg.map((image, index) => {
        if (index >= firstColImgAmout) {
          return <PreviewImage image={image} key={index} />;
        } else {
          return null;
        }
      })}
    </>
  );

  return (
    <section ref={sectionRef}>
      <h2>Preview images</h2>
      <ul className="pt-10 tablet:flex">
        {[firstCol, secondCol].map((col, index) => {
          return (
            <li key={index} className="tablet:w-2/4">
              <ul className="flex justify-center flex-wrap">{col}</ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProjectPreview;
