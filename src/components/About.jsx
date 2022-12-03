import avt from "../assets/images/cat.jpg";

const aboutDatas = [
  "My web development journey started when I was 17 years old.",
  "These days, I decided not to go to the university because I feel more comfortable learning it myself and discovering every piece of web technology.",
  "Even though I'm self-taught, I still believe that I have enough ability to give you what you need.",
];

function About() {
  const aboutTexts = aboutDatas.map((about, id) => {
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
    <section className="pb-11" id="about">
      <h1 className="heading leading-tight text-4xl">
        Hi, I'm Haruki Nguyen, I am a{" "}
        <span className="inline-block capitalize text-underline">
          web developer
        </span>
      </h1>
      <div className=" py-10">{aboutTexts}</div>
      <div className="flex justify-center">
        <div className="relative w-9/12 before:absolute before:w-full before:h-full before:bg-slate-300 before:-translate-x-1 before:-translate-y-1">
          <img src={avt} alt="avatar" className="translate-x-3 translate-y-3" />
        </div>
      </div>
    </section>
  );
}

export default About;
