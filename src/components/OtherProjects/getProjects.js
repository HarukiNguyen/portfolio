export default function getProjects(
  getCurrId,
  projectsData,
  projectsDetail,
  param
) {
  const currId = getCurrId(projectsData, param);
  let otherProjectIds = [];
  let projects = [];

  projectsDetail.forEach((projects) => {
    if (projects.id !== currId) {
      otherProjectIds = [...otherProjectIds, projects.id];
    }
  });

  projectsData.forEach((project) => {
    otherProjectIds.forEach((id) => {
      if (project.id === id) {
        projects = [...projects, project];
      }
    });
  });

  return projects;
}
