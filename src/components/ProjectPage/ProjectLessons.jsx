function ProjectLessons({ lessons }) {
  return (
    <section className="text-center">
      <h2>Problems and lessons</h2>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index} className="pb-5">
            {lesson}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectLessons;
