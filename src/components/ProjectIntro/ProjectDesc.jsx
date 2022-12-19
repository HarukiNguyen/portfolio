import arrowIcon from '../../assets/icons/arrow.svg';

function ProjectDesc({ descList }) {
  const descItems = descList.map((desc, index) => {
    // desc title and content
    let title;
    let content;

    // if desc is type then...
    if (index === 0) {
      title = 'Type';
      content = desc;
    } else {
      // if desc is stack then...
      title = 'Stack';
      content = desc.map((techItem) => (
        <li key={techItem} className="flex items-center py-2">
          <div className="pr-4">
            <img src={arrowIcon} alt="Arrow icon" className="max-w-[24px]" />
          </div>
          {techItem}
        </li>
      ));
    }

    return (
      <div key={title} className="pr-14 tablet:pr-28">
        <dt className="pb-2 font-bold ">{title}</dt>
        <dd className="border-t-2 border-indigo-300 pt-4">
          <ul className="">{content}</ul>
        </dd>
      </div>
    );
  });

  return <dl className="flex py-7 laptop:py-10">{descItems}</dl>;
}

export default ProjectDesc;
