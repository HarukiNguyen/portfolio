import { aboutData } from "./aboutData";
import Avatar from "./Avatar";

function About() {
  const aboutTexts = aboutData.map((about, id) => {
    return (
      <li key={id} className="pb-5 paragraph-dot pd-lt">
        <p>{about}</p>
      </li>
    );
  });

  return (
    <section
      className="animate-fadeIn [animation-delay:0.75s] opacity-0 tablet:flow-root"
      id="about"
    >
      <div className="tablet:w-2/4 tablet:float-left laptop:pr-8">
        <h1>
          Hi, I'm Haruki Nguyen, I am a{" "}
          <span className="capitalize text-underline">web developer</span>
        </h1>
        <ul className="px-2">{aboutTexts}</ul>
      </div>
      <div className="py-10 tablet:py-8 tablet:float-right tablet:w-2/4 laptop:py-5">
        <Avatar />
      </div>
    </section>
  );
}

export default About;
