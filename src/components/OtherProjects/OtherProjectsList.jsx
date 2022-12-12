import { useEffect, useState } from "react";
import { projectsData } from "../../data/projectsData";
import { projectsDetail } from "../../data/projectsData/projectsDetail";
import ProjectList from "../Projects/ProjectList";
import getCurrId from "./getCurrId";

function OtherProjectsList({ param }) {
  const [currId, setCurrId] = useState(null);
  const [otherProjectIds, setOtherProjectIds] = useState([]);
  const [projects, setProjects] = useState([]);

  // 1st render: initial
  // 4th render: final

  useEffect(() => {
    // 2nd render: update currId

    // get CurrId
    getCurrId(projectsDetail, setCurrId, param);

    // get otherProjectIds
    if (currId) {
      projectsDetail.forEach((projects) => {
        if (projects.id !== currId) {
          setOtherProjectIds([...otherProjectIds, projects.id]);
        }
      });
    }
  }, [currId]);

  useEffect(() => {
    // 3rd render: otherProjectIds update

    // get projects
    if (otherProjectIds) {
      projectsData.forEach((project) => {
        otherProjectIds.forEach((id) => {
          if (project.id === id) {
            setProjects([...projects, project]);
          }
        });
      });
    }
  }, [otherProjectIds]);

  const listClassNames =
    projects.length > 1
      ? "laptop:grid laptop:grid-cols-12 laptop:gap-x-10 desktop:gap-x-14"
      : "laptop:px-[25%]";

  return (
    <ul className={`pt-10 ${listClassNames}`}>
      <ProjectList projectsData={projects} />
    </ul>
  );
}

export default OtherProjectsList;
