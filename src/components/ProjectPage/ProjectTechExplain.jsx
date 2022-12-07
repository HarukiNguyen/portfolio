function ProjectTechExplain({ techAndExplain }) {
  const explanativeLength = techAndExplain.length;
  const itemClassNames =
    explanativeLength > 1 ? "pb-5 paragraph-dot pd-lt" : "";

  return (
    <section>
      <h2>Web stack and explanation</h2>
      <ul>
        {techAndExplain.map((explainPara, index) => (
          <li key={index} className={`${itemClassNames}`}>
            <p>{explainPara}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectTechExplain;
