export default function getCurrId(projectsData, setCurrId, param) {
  projectsData.forEach((projectData) => {
    if (projectData.url === `/portfolio/${param.project}`) {
      setCurrId(projectData.id);
    }
  });
}
