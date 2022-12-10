function ProjectDesc({ descList }) {
  const descItems = descList.map((desc, index) => {
    // desc title and content
    let title;
    let content;

    // if desc is type then...
    if (index === 0) {
      title = "Type";
      content = desc;
    } else {
      // if desc is stack then...
      title = "Stack";
      content = desc.map((techItem) => (
        <li key={techItem} className="py-1">
          {techItem}
        </li>
      ));
    }

    return (
      <div key={title} className="pr-14 tablet:pr-28">
        <dt className="pb-2 font-bold ">{title}</dt>
        <dd className="pt-4 border-t-2">
          <ul className="list-disc">{content}</ul>
        </dd>
      </div>
    );
  });

  return <dl className="py-7 laptop:py-10 flex">{descItems}</dl>;
}

export default ProjectDesc;
