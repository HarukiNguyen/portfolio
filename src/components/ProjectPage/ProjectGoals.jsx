function ProjectGoals({ goals }) {
  return (
    <section>
      <h2>Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectGoals;
