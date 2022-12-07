import { useEffect, useState } from "react";
import { projectsData } from "../../../data/projectsData";
import ProjectList from "../../Projects/ProjectList";
import getCurrId from "./getCurrId";
import getIdList from "./getIdList";
import getOtherProjects from "./getOtherProjects";
import getPrevNext from "./getPrevNext";

function OtherProjects({ param }) {
  const [idList, setIdList] = useState([]);
  const [currId, setCurrId] = useState(null);

  const [prevId, setPrevId] = useState(null);
  const [nextId, setNextId] = useState(null);

  const [maxId, setMaxId] = useState(null);
  const [minId, setMinId] = useState(null);

  const [otherProjects, setOtherProjects] = useState([]);

  // handle get id list
  useEffect(() => {
    getIdList(projectsData, setIdList);
  }, []);

  useEffect(() => {
    getCurrId(projectsData, setCurrId, param);

    // handle set currId, prevId, nextId, minId, and maxId
    // check if idList have any items
    if (idList.length) {
      const listLength = idList.length;

      // if more than 2 items then choose max and min
      // if less than 2 items then choose [0] or [0] and [1] 
      // based on idList length (1 or 2)
      if (listLength > 2) {
        setMaxId(Math.max(...idList));
        setMinId(Math.min(...idList));
        if (maxId && minId !== null) {
          getPrevNext(currId, maxId, minId);
        }
      } else {
        if (listLength === 1) {
          setPrevId(idList[0]);
          setNextId(idList[0]);
        } else {
          setPrevId(idList[0]);
          setNextId(idList[1]);
        }
      }
    }

    // handle show current other projects
    getOtherProjects(prevId, nextId, currId, projectsData, setOtherProjects);
  }, [idList, maxId, minId, prevId, nextId]);

  return (
    <section>
      <h2>Other projects</h2>
      <ProjectList projectsData={otherProjects} />
    </section>
  );
}

export default OtherProjects;
