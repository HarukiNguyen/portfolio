function ProjectIcon({ iconUrl, name }) {
  return (
    <span className="flex justify-center pb-3">
      <img src={iconUrl} alt={`${name} icon`} className="w-8" />
    </span>
  );
}

export default ProjectIcon;
