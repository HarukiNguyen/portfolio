import { useParams } from "react-router-dom";
import ProjectGoals from "../components/ProjectPage/ProjectGoals";
import ProjectIntro from "../components/ProjectPage/ProjectIntro";
import { projectsData } from "../data/projectsData";

function ProjectPage() {
  const params = useParams();

  const project = projectsData.find(
    (project) => `/${params.project}` === project.url
  );

  const { projectDetail } = project;
  const { detailName, purpose, goals, type, tech, imgs, techAndExplain } =
    projectDetail;
  const { introImg, previewImg } = imgs;

  return (
    <>
      <ProjectIntro
        detailName={detailName}
        purpose={purpose}
        type={type}
        tech={tech}
        introImg={introImg}
      />
      <ProjectGoals goals={goals} />
    </>
  );
}

export default ProjectPage;
