function ProjectTechExplain({ techAndExplain }) {
  return (
    <section>
      <h2>Web stack and explanation</h2>
      <ul>
        {techAndExplain.map((explainPara, index) => (
          <li key={index}>{explainPara}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectTechExplain;
