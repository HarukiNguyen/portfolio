import { aboutData } from "./aboutData";
import Avatar from "./Avatar";

function About() {
  const aboutTexts = aboutData.map((about, id) => {
    return (
      <li key={id} className="pb-5 paragraph-dot pd-lt para-max-w">
        <p>{about}</p>
      </li>
    );
  });

  return (
    <section className="animate-fadeIn [animation-delay:0.75s] opacity-0">
      <div className="hidden tablet:block py-10 tablet:py-8 laptop:py-5 tablet:float-right tablet:w-2/4 laptop:w-5/12">
        <Avatar />
      </div>
      <div>
        <h1>
          Hi, I'm Haruki Nguyen, I am a{" "}
          <span className="capitalize text-indigo-600">web developer</span>
        </h1>
        <ul className="px-2">{aboutTexts}</ul>
      </div>
      <div className="tablet:hidden py-10 tablet:py-8 laptop:py-5">
        <Avatar />
      </div>
    </section>
  );
}

export default About;
