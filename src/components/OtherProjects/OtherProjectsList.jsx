import { useEffect, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { projectsDetail } from '../../data/projectsData/projectsDetail';
import ProjectList from '../Projects/ProjectList';
import getCurrId from './getCurrId';
import getProjects from './getProjects';

function OtherProjectsList({ param }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projects = getProjects(
      getCurrId,
      projectsData,
      projectsDetail,
      param
    );

    setProjects(projects);
  }, [param]);

  const listClassNames =
    projects.length > 1
      ? 'laptop:grid laptop:grid-cols-12 laptop:gap-x-10 desktop:gap-x-14'
      : 'laptop:px-[25%]';

  return (
    <ul className={`pt-10 ${listClassNames}`}>
      {<ProjectList projectsData={projects} />}
    </ul>
  );
}

export default OtherProjectsList;
