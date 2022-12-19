export default function getCurrId(projectsData, param) {
  let currId;
  projectsData.forEach((projectData) => {
    if (projectData.url === `/${param.project}`) {
      currId = projectData.id;
    }
  });
  return currId;
}
