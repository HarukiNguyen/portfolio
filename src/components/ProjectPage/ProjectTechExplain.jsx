function ProjectTechExplain({ techAndExplain }) {
  return (
    <section>
      <h2>Web stack and explanation</h2>
      <ul>
        {techAndExplain.map((explainPara) => (
          <li key={explainPara}>{explainPara}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectTechExplain;
