function ProjectIntro({ detailName, url, purpose, type, tech, introImg }) {
  return (
    <section>
      <h1>
        <a href={url} alt={detailName}>
          {detailName}
        </a>
      </h1>
      <p>{purpose}</p>
      <dl>
        <dt>Type</dt>
        <dd>{type}</dd>

        <dt>Tech</dt>
        <dd>
          <ul>
            {tech.map((techItem) => (
              <li key={techItem}>{techItem}</li>
            ))}
          </ul>
        </dd>
      </dl>
      <img src={introImg} alt="Introduce image" />
    </section>
  );
}

export default ProjectIntro;
