function ProjectLink({ url, linkText, linkIcon, name }) {
  return (
    <div className="text-center pt-3">
      <a
        href={url}
        className="group px-2 py-1 rounded relative underline uppercase font-bold hover:text-slate-600 focus:bg-slate-200 focus:outline-none"
      >
        {linkText}
        <img
          src={linkIcon}
          alt={name}
          className="hidden absolute left-full pl-1 top-2/4 -translate-y-2/4 group-hover:inline-block group-focus:inline-block"
        />
      </a>
    </div>
  );
}

export default ProjectLink;
