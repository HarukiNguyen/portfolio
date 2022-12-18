import expressLoveIntro from '../../assets/images/projects/express-your-love/project-detail/express-love-intro.png';
import expressLovePreview1 from '../../assets/images/projects/express-your-love/project-detail/express-love-preview-1.png';
import expressLovePreview2 from '../../assets/images/projects/express-your-love/project-detail/express-love-preview-2.png';
import expressLovePreview3 from '../../assets/images/projects/express-your-love/project-detail/express-love-preview-3.png';
import validatorJSIntro from '../../assets/images/projects/ValidatorJS//project-detail/validatorjs-intro.png';
import webFromPreview from '../../assets/images/projects/web-form/project-detail/webform-intro.png';
import webFormPreview1 from '../../assets/images/projects/web-form/project-detail/webform-preview-1.png';
import webFormPreview2 from '../../assets/images/projects/web-form/project-detail/webform-preview-2.png';
import webFormPreview3 from '../../assets/images/projects/web-form/project-detail/webform-preview-3.png';

const projectsDetail = [
  {
    id: 0,
    detailName: 'ValidatorJS library',
    url: 'https://github.com/HarukiNguyen/ValidatorJS#readme',
    purpose: 'A small JS library use to validate HTMl form controls',
    goals: [
      'This library will have a function, the users will provide the parameters, which is a list of the form control element.',
      'After the library run, it will return an array of results to tell whether all the form control is true or not, and information about it.',
    ],
    type: 'Personal project',
    stack: ['Javascript', 'Webpack'],
    imgs: {
      introImg: validatorJSIntro,
      previewImg: [webFormPreview1, webFormPreview3, webFormPreview2],
    },
    techAndExplain: [
      "Javascript: there are obvious reasons to explain this choice, it's too popular, have many web API, and is easy to debug.",
      'Webpack: when talking about libraries, I start to think about the production code, and...it has to be minimized. So I choose Webpack, one of the most popular JS bundlers out there.',
    ],
    lessons: [
      "Actually, when I was working on this project, I didn't face many problems. Because the library is just about looping through form controls and checking if its value matches the condition or not.",
      "And then the real problem comes in when I start to finish it. Specifically, when I publish it to the NPM registry. I faced many problems, and the hardest problems for me (I think it will be a silly mistake when you see it) are the package can't be imported with the package name.",
      'Now, I still not finished it yet. But I slowly learned many around the problem. So I believe the problem will soonly solved.',
    ],
  },
  {
    id: 1,
    detailName: 'Web form Validator',
    url: 'https://harukinguyen.github.io/web-form',
    purpose:
      'This is a small webpage I made for testing my ValidatorJS library.',
    goals: [
      'My first goal is to handle the UI/UX and logic when the form is valid or not. Because the Validator JS library is so small, it just provides some simple API that tells me whether the form controls are valid or not.',
      'The second goal is simple, I just want to make this website as clean as possible. The colors, the fonts, and the spacing on the webpage, all have to match each other.',
    ],
    type: 'Personal project',
    stack: ['HTML & CSS', 'Javascript'],
    imgs: {
      introImg: webFromPreview,
      previewImg: [webFormPreview1, webFormPreview3, webFormPreview2],
    },
    techAndExplain: [
      "Javascript: I use vanilla JS because I think I need to make sure the library will work correctly with vanilla JS. I also think that I won't need to write a complex application in this case, so I don't need a JS library or framework to implement my application",
    ],
    lessons: [
      'During the development process, I faced many complex problems, which is quite challenging for my current development skills.',
      'And the most interesting problem, surprisingly not about the ValidatorJS library, but about the logic to handle the valid state of the form control.',
      'I have to find a way to handle the valid state of each form control based on the returned object of the library. Luckily, after hours of hard work, I finish it.',
      'After that, I realized that I learned more about web API, loop, and if-else statements, and know how to use them together in an effective way.',
    ],
  },
  {
    id: 2,
    detailName: 'Be brave to express your love',
    url: 'https://harukinguyen.github.io/express-your-love',
    purpose:
      "After seeing a video on YouTube showing a website, that is used to express someone's love, and when she/he hovers the mouse over the No button, it jumps to a different location on the screen. I thought it was will be interesting for me, so I started to create it.",
    goals: [
      'There are only 2 goals that come to my mind when I think about this idea, one is the same feature, but better. Another is beautiful and romantic.',
    ],
    type: 'Personal project',
    stack: ['HTML & CSS', 'Javascript'],
    imgs: {
      introImg: expressLoveIntro,
      previewImg: [
        expressLovePreview2,
        expressLovePreview1,
        expressLovePreview3,
      ],
    },
    techAndExplain: [
      'Javascript is a great language to create these types of websites, so I chose it.',
      "And I also think that I won't need to write a complex application, in this case, actually, it is just a simple application, so I don't need a JS library or framework to implement my application.",
    ],
    lessons: [
      'In the journey of creating this webpage, the hardest part absolutely is the randomly jumping logic.',
      'But, by splitting the problem into small chunks, I quickly finished it. After that, I learned that I can complete a big problem by just splitting it out, and solving it.',
    ],
  },
];

export { projectsDetail };
