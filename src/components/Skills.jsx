import React from "react";
import skillsIcon from "../assets/icons/skills.png";

const skills = [
  "HTML & CSS",
  "Javascript",
  "TailwindCSS",
  "React",
  "Git & GitHub",
];

function Skills() {
  const skillItems = skills.map((skill) => (
    <li key={skill} className="w-2/4 pb-6 pl-7">
      <div className="">
        <span className="relative before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:-left-4 before:top-2/4 before:-translate-y-2/4 before:bg-slate-400 inline-block px-3 py-2 rounded bg-slate-50 shadow">
          {skill}
        </span>
      </div>
    </li>
  ));

  return (
    <section className="pb-11">
      <h2 className="pt-4 heading text-3xl">
        Skills{" "}
        <img
          src={skillsIcon}
          alt="skills"
          className="inline-block align-baseline ml-2"
        />
      </h2>
      <p className="py-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsam id
        porro ullam expedita sunt pariatur omnis animi rerum qui?
      </p>
      <ul className="flex flex-wrap">{skillItems}</ul>
    </section>
  );
}

export default Skills;
