import { aboutData } from "./aboutData";
import Avatar from "./Avatar";

function About() {
  const aboutTexts = aboutData.map((about, id) => {
    return (
      <li className="pb-5 paragraph-dot pd-lt">
        <p key={id}>{about}</p>
      </li>
    );
  });

  return (
    <section
      className="animate-fadeIn [animation-delay:0.75s] opacity-0"
      id="about"
    >
      <h1>
        Hi, I'm Haruki Nguyen, I am a{" "}
        <span className="capitalize text-underline">web developer</span>
      </h1>
      <ul className="px-2">{aboutTexts}</ul>
      <Avatar />
    </section>
  );
}

export default About;
