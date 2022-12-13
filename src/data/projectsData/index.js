import { projectsDetail } from './projectsDetail';
import { projectsOverview } from './projectsOverview';

let projectsData = [];

projectsOverview.forEach((projectOverview) => {
  let combineData = { ...projectOverview };
  projectsDetail.forEach((projectDetail) => {
    if (projectOverview.id === projectDetail.id) {
      combineData = { ...combineData, projectDetail };
    }
  });

  projectsData.push(combineData);
});

export { projectsData };
