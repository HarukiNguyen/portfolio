export default function getOtherProjects(
  prevId,
  nextId,
  currId,
  projectsData,
  setOtherProjects
) {
  if (prevId && nextId) {
    projectsData.forEach((projectData) => {
      if (projectData.id === prevId || projectData.id === nextId) {
        if (currId !== projectData.id) {
          setOtherProjects((prevState) => [
            ...new Set([...prevState, projectData]),
          ]);
        }
      }
    });
  }
}
