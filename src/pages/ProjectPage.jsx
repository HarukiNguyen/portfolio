import { useParams } from "react-router-dom";
import OtherProjects from "../components/ProjectPage/OtherProjects/";
import ProjectGoals from "../components/ProjectPage/ProjectGoals";
import ProjectIntro from "../components/ProjectPage/ProjectIntro";
import ProjectLessons from "../components/ProjectPage/ProjectLessons";
import ProjectPreview from "../components/ProjectPage/ProjectPreview";
import ProjectTechExplain from "../components/ProjectPage/ProjectTechExplain";
import { projectsData } from "../data/projectsData";

function ProjectPage() {
  const param = useParams();

  const project = projectsData.find(
    (project) => `/${param.project}` === project.url
  );

  const { projectDetail } = project;
  const {
    detailName,
    url,
    purpose,
    goals,
    type,
    stack,
    imgs,
    techAndExplain,
    lessons,
  } = projectDetail;
  const { introImg, previewImg } = imgs;

  return (
    <>
      <ProjectIntro
        detailName={detailName}
        purpose={purpose}
        type={type}
        stack={stack}
        introImg={introImg}
        url={url}
      />
      <ProjectGoals goals={goals} />
      <ProjectTechExplain techAndExplain={techAndExplain} />
      <ProjectPreview previewImg={previewImg} />
      <ProjectLessons lessons={lessons} />
      <OtherProjects param={param} />
    </>
  );
}

export default ProjectPage;
