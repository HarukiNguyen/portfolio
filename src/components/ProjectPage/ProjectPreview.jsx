function ProjectPreview({ previewImg }) {
  return (
    <section>
      <h2>Preview images</h2>
      <ul>
        {previewImg.map((image) => (
          <li key={image}>
            <img src={image} alt="Preview image" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectPreview;
