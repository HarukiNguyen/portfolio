export default function getIdList(projectsData, setIdList) {
  projectsData.forEach((projectData) => {
    if (projectData.projectDetail) {
      setIdList((prevState) => [...new Set([...prevState, projectData.id])]);
    }
  });
}
