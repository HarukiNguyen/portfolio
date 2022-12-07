function ProjectPreview({ previewImg }) {
  return (
    <section>
      <h2>Preview images</h2>
      <ul className="pt-10 flex justify-center flex-wrap">
        {previewImg.map((image, index) => (
          <li key={index} className="w-10/12 pb-10">
            <img
              src={image}
              alt="Preview image"
              className="rounded-md shadow-3xl"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectPreview;
