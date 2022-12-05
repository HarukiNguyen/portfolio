import { projectsOverview } from "../data/projectsData";
import { useParams } from "react-router-dom";

function ProjectPage() {
  const params = useParams();

  const project = projectsOverview.find(
    (project) => `/${params.project}` === project.url
  );

  return <h3>Have a nice day</h3>;
}

export default ProjectPage;
