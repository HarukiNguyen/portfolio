function ProjectGoals({ goals }) {
  return (
    <section>
      <h2>Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index} className="pb-4">
            <p>{goal}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectGoals;
