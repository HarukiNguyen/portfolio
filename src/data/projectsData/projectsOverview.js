// Import project item assets
import blogThumb from '../../assets/images/projects/blog/desk.jpg';
import blogIcon from "../../assets/images/projects/blog/pencil.svg";
import expressLoveThumb from "../../assets/images/projects/express-your-love/desk.jpg";
import expressLoveIcon from "../../assets/images/projects/express-your-love/heart.svg";
import validatorJSThumb from '../../assets/images/projects/ValidatorJS/desk.jpg';
import validatorJSIcon from '../../assets/images/projects/ValidatorJS/sheild.svg';
import webFormThumb from "../../assets/images/projects/web-form/desk.jpg";
import webFormIcon from "../../assets/images/projects/web-form/password.svg";

// Import projects detail assets

const projectsOverview = [
  {
    id: 1,
    name: "ValidatorJS",
    iconUrl: validatorJSIcon,
    description:
      "A simple Validator library for web form",
    completed: false,
    url: "/validatorJS",
    thumbnailUrl: validatorJSThumb,
  },
  {
    id: 2,
    name: "Web form",
    // detailName: "Web form application",
    iconUrl: webFormIcon,
    description:
      "Web forms use to test my own Validator library",
    completed: true,
    url: "/web-form",
    thumbnailUrl: webFormThumb,
  },
  {
    id: 3,
    name: "Your love",
    iconUrl: expressLoveIcon,
    description:
      "Hope your have your love!",
    completed: true,
    url: "/express-your-love",
    thumbnailUrl: expressLoveThumb,
  },
  {
    id: 4,
    name: "BLog",
    iconUrl: blogIcon,
    description:
      "I write about my life",
    completed: false,
    url: "/blog",
    thumbnailUrl: blogThumb,
  },
];

export { projectsOverview };
