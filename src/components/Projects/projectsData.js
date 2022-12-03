import blogThumb from '../../assets/images/projects/blog/desk.jpg';
import blogIcon from "../../assets/images/projects/blog/pencil.svg";
import expressLoveThumb from "../../assets/images/projects/express-your-love/desk.jpg";
import expressLoveIcon from "../../assets/images/projects/express-your-love/heart.svg";
import webFormIcon from "../../assets/images/projects/web-form/check.svg";
import webFormThumb from "../../assets/images/projects/web-form/desk.jpg";

const projects = [
  {
    name: "ValidatorJS",
    detailName: "Web form Validator",
    iconUrl: webFormIcon,
    description:
      "A simple Validator library for web form",
    completed: false,
    url: "/validatorJS",
    thumbnailUrl: webFormThumb,
  },
  {
    name: "Web form",
    detailName: "Web form application",
    iconUrl: webFormIcon,
    description:
      "Web forms use to test my own Validator library",
    completed: true,
    url: "/web-form",
    thumbnailUrl: webFormThumb,
  },
  {
    name: "Your love",
    detailName: "Be brave to express your love",
    iconUrl: expressLoveIcon,
    description:
      "Hope your have your love!",
    completed: true,
    url: "/express-your-love",
    thumbnailUrl: expressLoveThumb,
  },
  {
    name: "BLog",
    iconUrl: blogIcon,
    description:
      "I write about my life",
    completed: false,
    url: "/blog",
    thumbnailUrl: blogThumb,
  },
];

export { projects };
