import blogThumb from '../../assets/images/projects/blog/desk.jpg';
import blogIcon from "../../assets/images/projects/blog/pencil.png";
import expressLoveThumb from "../../assets/images/projects/express-your-love/desk.jpg";
import expressLoveIcon from "../../assets/images/projects/express-your-love/heart.png";
import linkInBioIcon from "../../assets/images/projects/link-in-bio/clover.png";
import linkInBioThumb from "../../assets/images/projects/link-in-bio/desk.jpg";
import todolistThumb from "../../assets/images/projects/react-redux-todolist/desk.jpg";
import todolistIcon from "../../assets/images/projects/react-redux-todolist/todolist.png";
import webFormThumb from "../../assets/images/projects/web-form/desk.jpg";
import webFormIcon from "../../assets/images/projects/web-form/form.png";

const projects = [
  {
    name: "Link in bio",
    iconUrl: linkInBioIcon,
    description:
      "My profile contains list of social media",
    completed: true,
    url: "/projects/link-in-bio",
    thumbnailUrl: linkInBioThumb,
  },
  {
    name: "Todo list",
    iconUrl: todolistIcon,
    description:
      "A todolist app create with React and Redux",
    completed: true,
    url: "/projects/react-redux-todolist",
    thumbnailUrl: todolistThumb,
  },
  {
    name: "Web form",
    iconUrl: webFormIcon,
    description:
      "Web forms use to test my own Validator library",
    completed: true,
    url: "/projects/react-redux-todolist",
    thumbnailUrl: webFormThumb,
  },
  {
    name: "Your love",
    iconUrl: expressLoveIcon,
    description:
      "Hope your have your love!",
    completed: true,
    url: "/projects/react-redux-todolist",
    thumbnailUrl: expressLoveThumb,
  },
  {
    name: "BLog",
    iconUrl: blogIcon,
    description:
      "I write about my life",
    completed: false,
    url: "",
    thumbnailUrl: blogThumb,
  },
];

export { projects };
