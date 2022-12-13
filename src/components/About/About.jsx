import { aboutData } from './aboutData';
import Avatar from './Avatar';

function About() {
  const aboutTexts = aboutData.map((about, id) => {
    return (
      <li key={id} className="paragraph-dot pd-lt para-max-w pb-5">
        <p>{about}</p>
      </li>
    );
  });

  return (
    <section className="animate-fadeIn opacity-0 [animation-delay:0.75s]">
      <div className="hidden py-10 tablet:float-right tablet:block tablet:w-2/4 tablet:py-8 laptop:w-5/12 laptop:py-5">
        <Avatar />
      </div>
      <div>
        <h1>
          Hi, I'm Haruki Nguyen, I am a{' '}
          <span className="capitalize text-indigo-600">web developer</span>
        </h1>
        <ul className="px-2">{aboutTexts}</ul>
      </div>
      <div className="py-10 tablet:hidden tablet:py-8 laptop:py-5">
        <Avatar />
      </div>
    </section>
  );
}

export default About;
