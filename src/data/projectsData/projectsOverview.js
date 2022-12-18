// Import project item assets
import blogThumb from '../../assets/images/projects/blog/desk.jpg';
import blogIcon from '../../assets/images/projects/blog/pencil.svg';
import expressLoveThumb from '../../assets/images/projects/express-your-love/express-your-love-thumb.jpg';
import expressLoveIcon from '../../assets/images/projects/express-your-love/heart.svg';
import validatorJSIcon from '../../assets/images/projects/ValidatorJS/sheild.svg';
import validatorJSThumb from '../../assets/images/projects/ValidatorJS/validatorjs-thumb.jpg';
import webFormIcon from '../../assets/images/projects/web-form/password.svg';
import webFormThumb from '../../assets/images/projects/web-form/webform-thumb.png';

// Import projects detail assets

const projectsOverview = [
  {
    id: 0,
    name: 'ValidatorJS',
    iconUrl: validatorJSIcon,
    description: 'A simple JS Validator library for web form',
    completed: true,
    url: '/portfolio/validatorJS',
    thumbnailUrl: validatorJSThumb,
  },
  {
    id: 1,
    name: 'Web form',
    iconUrl: webFormIcon,
    description: 'Web forms use to test my ValidatorJS library',
    completed: true,
    url: '/portfolio/web-form',
    thumbnailUrl: webFormThumb,
  },
  {
    id: 2,
    name: 'Express your love',
    iconUrl: expressLoveIcon,
    description: 'A webpage to bare your heart to your crush!',
    completed: true,
    url: '/portfolio/express-your-love',
    thumbnailUrl: expressLoveThumb,
  },
  {
    id: 3,
    name: 'BLog',
    iconUrl: blogIcon,
    description: 'I write about my life',
    completed: false,
    url: '/portfolio/blog',
    thumbnailUrl: blogThumb,
  },
];

export { projectsOverview };
