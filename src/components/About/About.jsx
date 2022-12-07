import { aboutData } from "./aboutData";
import Avatar from "./Avatar";

function About() {
  const aboutTexts = aboutData.map((about, id) => {
    return (
      <p
        key={id}
        className="indent-5 pb-5 paragraph-dot before:left-0 before:top-[0.5em]"
      >
        {about}
      </p>
    );
  });

  return (
    <section
      className="animate-fadeIn [animation-delay:0.75s] opacity-0"
      id="about"
    >
      <h1>
        Hi, I'm Haruki Nguyen, I am a{" "}
        <span className="capitalize text-underline">
          web developer
        </span>
      </h1>
      <div className="px-2">{aboutTexts}</div>
      <Avatar />
    </section>
  );
}

export default About;
