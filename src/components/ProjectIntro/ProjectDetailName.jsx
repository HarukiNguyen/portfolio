function ProjectDetailName({ url, detailName }) {
  return (
    <div className="pb-10">
      <a
        href={url}
        alt={detailName}
        className="group hover:text-indigo-400 hover:underline focus:outline-none"
      >
        <h1 className="inline px-2 py-1 -mx-2 -my-1 group-focus:hocus-state rounded transition-colors">
          {detailName}
        </h1>
        <div className="pl-2 inline-block align-baseline">
          <svg
            className="w-7 h-7"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 10.5L21 3"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 3L21 3L21 8"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 14V19C21 20.1046 20.1046 21 19 21H12H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H10"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}

export default ProjectDetailName;
