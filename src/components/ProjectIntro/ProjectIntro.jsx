import ProjectDesc from "./ProjectDesc";
import ProjectDetailName from "./ProjectDetailName";

function ProjectIntro({ detailName, url, purpose, type, stack, introImg }) {
  return (
    <section className="animate-fadeIn [animation-delay:0.75s] opacity-0 tablet:grid tablet:grid-cols-12">
      <div className="tablet:col-span-10 laptop:col-span-7">
        <ProjectDetailName url={url} detailName={detailName} />

        {/* purpose, intro paragraph */}
        <p className="para-max-w">{purpose}</p>

        <ProjectDesc descList={[type, stack]} />
      </div>
      {/* intro image */}
      <div className="tablet:col-span-12 laptop:col-span-10">
        <img
          src={introImg}
          alt="Introduce image"
          className="rounded-md shadow-lg"
        />
      </div>
    </section>
  );
}

export default ProjectIntro;
