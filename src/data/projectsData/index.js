import { projectsDetail } from "./projectsDetail";
import { projectsOverview } from "./projectsOverview";

let projectsData = [];

projectsOverview.forEach((projectOverview, index) => {
  projectsDetail.forEach((projectDetail) => {
    if (projectOverview.id === projectDetail.id) {
      delete projectDetail.id;
      const combineData = { ...projectOverview, projectDetail }
      projectsData.push(combineData)
    }
  })
})

export { projectsData };

