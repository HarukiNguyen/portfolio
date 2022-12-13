export default function getCurrId(projectsData, setCurrId, param) {
  projectsData.forEach((projectData) => {
    const currUrl = `https://harukinguyen.github.io/${param.project}`;
    if (currUrl === projectData.url) {
      setCurrId(projectData.id);
    }
  });
}
