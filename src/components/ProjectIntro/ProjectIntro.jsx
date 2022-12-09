import ProjectDesc from "./ProjectDesc";
import ProjectDetailName from "./ProjectDetailName";

function ProjectIntro({ detailName, url, purpose, type, stack, introImg }) {
  return (
    <section className="animate-fadeIn [animation-delay:0.75s] opacity-0">
      <ProjectDetailName url={url} detailName={detailName} />

      {/* purpose, intro paragraph */}
      <p className="para-max-w">{purpose}</p>
      
      <ProjectDesc descList={[type, stack]} />
      {/* intro image */}
      <div className="laptop:flex laptop:justify-center">
        <img
          src={introImg}
          alt="Introduce image"
          className="rounded-md shadow-lg laptop:w-10/12"
        />
      </div>
    </section>
  );
}

export default ProjectIntro;
