import { Link } from 'react-router-dom';
import LinkIcon from '../LinkIcon';

function ProjectLink({ url, completed }) {
  const linkText = completed ? 'view project' : 'comming soon';

  return (
    <Link
      to={`${url}`}
      tabIndex={completed ? 0 : -1}
      className={`${
        !completed ? 'disable-link text-slate-400 no-underline' : ''
      } focus:hocus-state group relative rounded px-2 py-1 font-bold uppercase tracking-wider underline hover:text-indigo-400`}
    >
      {linkText}
      <LinkIcon className="absolute left-full top-2/4 w-7 origin-[left_center] -translate-y-2/4 scale-0 pl-1 transition-transform group-hover:scale-100" />
    </Link>
  );
}

export default ProjectLink;
