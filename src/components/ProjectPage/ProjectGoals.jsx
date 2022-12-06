function ProjectGoals({ goals }) {
  return (
    <section>
      <h2></h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal}>{goal}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectGoals;
