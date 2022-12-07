import linkIcon from "../../assets/icons/link.svg";

function ProjectIntro({ detailName, url, purpose, type, stack, introImg }) {
  return (
    <section>
      <a
        href={url}
        alt={detailName}
        className="group px-2 py-1 -mx-2 -my-1 hover:text-slate-600 focus:bg-slate-50 focus:outline-none transition-color"
      >
        <h1 className="inline">{detailName}</h1>
        <div className="inline-flex items-center">
          <img
            src={linkIcon}
            alt="Link icon"
            className="block pl-3 w-10 group-hover:scale-110 group-focus:scale-110 transition-transform"
          />
        </div>
      </a>
      <p className="py-7">{purpose}</p>
      <dl className="flex">
        {[type, stack].map((desc, index) => {
          let title;
          let content;
          if (index === 0) {
            title = "Type";
            content = desc;
          } else {
            title = "Stack";
            content = desc.map((techItem) => (
              <li key={techItem} className="py-1">
                {techItem}
              </li>
            ));
          }

          return (
            <div key={title} className="pr-14">
              <dt className="pb-2 font-bold">{title}</dt>
              <dd>
                <ul className="list-disc">{content}</ul>
              </dd>
            </div>
          );
        })}
      </dl>
      <div className="py-7">
        <img
          src={introImg}
          alt="Introduce image"
          className="rounded-md shadow-lg"
        />
      </div>
    </section>
  );
}

export default ProjectIntro;
