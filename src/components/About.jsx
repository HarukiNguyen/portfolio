import avt from "../assets/images/cat.jpg";

const aboutDatas = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil a distinctio ipsam voluptatum fugit facilis ea deserunt explicabo impedit numquam.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil a distinctio ipsam voluptatum fugit facilis ea deserunt explicabo impedit numquam.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil a distinctio ipsam voluptatum fugit facilis ea deserunt explicabo impedit numquam.",
];

function About() {
  const aboutTexts = aboutDatas.map((about, id) => {
    return (
      <p key={id} className="indent-3 pb-5">
        {about}
      </p>
    );
  });

  return (
    <section className="pb-11" id="about">
      <h1 className="pb-11 heading leading-tight text-4xl">
        Hi, I'm Haruki Nguyen, I am a{" "}
        <span className="inline-block capitalize text-underline">
          web developer
        </span>
      </h1>
      {aboutTexts}
      <div className="flex justify-center">
        <div className="relative w-9/12 before:absolute before:w-full before:h-full before:bg-slate-300 before:-translate-x-1 before:-translate-y-1">
          <img src={avt} alt="avatar" className="translate-x-3 translate-y-3" />
        </div>
      </div>
    </section>
  );
}

export default About;
