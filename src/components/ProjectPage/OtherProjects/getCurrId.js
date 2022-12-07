export default function getCurrId(projectsData, setCurrId, param) {
  projectsData.forEach((projectData) => {
    if (`/${param.project}` === projectData.url) {
      setCurrId(projectData.id);
    }
  });
}