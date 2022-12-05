import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";

function ProjectPage() {
  const params = useParams();

  const project = projectsData.find(
    (project) => `/${params.project}` === project.url
  );

  return <h3>Have a nice day</h3>;
}

export default ProjectPage;
