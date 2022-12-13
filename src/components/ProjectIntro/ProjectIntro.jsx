import ProjectDesc from './ProjectDesc';
import ProjectDetailName from './ProjectDetailName';

function ProjectIntro({ detailName, url, purpose, type, stack, introImg }) {
  return (
    <section className="animate-fadeIn opacity-0 [animation-delay:0.75s] tablet:grid tablet:grid-cols-12">
      <div className="tablet:col-span-10 laptop:col-span-9">
        <ProjectDetailName url={url} detailName={detailName} />

        {/* purpose, intro paragraph */}
        <p className="">{purpose}</p>

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
