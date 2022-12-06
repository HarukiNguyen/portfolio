function ProjectLessons({ lessons }) {
  return (
    <section>
      <h2>Problems and lessons</h2>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectLessons;
