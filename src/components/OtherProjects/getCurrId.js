export default function getCurrId(projectsData, setCurrId, param) {
  projectsData.forEach((projectData) => {
    if (projectData.url === `/${param.project}`) {
      setCurrId(projectData.id);
    }
  });
}
