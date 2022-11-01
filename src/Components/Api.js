import crypto from "../assets/crypto.jpg";
import cycle from "../assets/cycle.webp";
import cambly from "../assets/cambly.png";
import pepsi from "../assets/pepsi.png";
import gradient from "../assets/gradient.png";
import todo from "../assets/todo.png";
import digital from "../assets/digital.png";
import calc from "../assets/calc.png";
import shoe from "../assets/shoe.jfif";

const data = {
  persondata: {
    resumeLink:"https://github.com/mg123gupta/db/raw/main/Mohini_cv.pdf",
    aboutus: [
      {
        imageLink: "images/profile.jpg",
        Name: "Mohini Gupta",
        Email: "guptamohini251@gmail.com",
        Phonenumber: "8840400596",
        Personallinks: [
          "mailto:listing@bitbns.com",
          "https://www.linkedin.com/in/mohini-gupta-486a7b113/",
          "https://github.com/mg123gupta?tab=repositories",
          "8840400596",
        ],
        links: [
          {
            icon: "url",
            type: "Git",
            url: "https://github.com/mg123gupta?tab=repositories",
          },
          {
            icon: "url",
            type: "Linkedin",
            url: "https://www.linkedin.com/in/mohini-gupta-486a7b113/",
          },
        ],
        developertype: "Full Stack Developer",
        heading:
          "Great things are done by a series of small things brought together.",
        description:
          "I love building UI/UX design experiences that improve user's everyday life + I like to design Front end of website and Development of beckend. I am always hungry for new challenges and innovations. Any spare time I have to work on side projects to further my skills so that I can apply these to real projects.",
      },
    ],
    skill: [
      {
        name: [
          "HTML",
          "CSS/SASS",
          "JAVASCRIPT",
          "React/Redux",
          "Typescript",
          "Bootstrap/Tailwind/Material-UI",
          "Testing(Jest/React-Testing/Cypress)",
        ],
        
      },
    ],
    projects: [
      {
        Name: "Customize Shoe maker",
        livelink: "https://resilient-douhua-ab1a6d.netlify.app/",
        imageLink: shoe,
        shortdescription:
          "This application is created in React-js by using HTML, CSS, React-three js and animation libraries",
      },
      {
        Name: "Gradient-Picker",
        livelink: "https://loquacious-pavlova-1a7ba8.netlify.app",

        imageLink: gradient,
        shortdescription:
          "This application is created in React by using HTML, CSS and Javascript. ",
      },
      {
        Name: "TASKIFY",
        livelink: "https://gregarious-beignet-d8740a.netlify.app",

        imageLink: todo,
        shortdescription:
          "This application is created in React-js by using Typescript, Tailwind and drag-drop library ",
      },
      {
        Name: "PPF Calculator",
        livelink: "https://endearing-mooncake-bdd230.netlify.app/",

        imageLink: calc,
        shortdescription:
          "This application is created in React by using Javascript, Typescript, Tailwind and Graph based libraries ",
      },

      {
        Name: "Buy-Cycle",
        livelink: "https://preeminent-sunflower-78bea2.netlify.app/",

        imageLink: cycle,
        shortdescription:
          "This Animated Responsive Buy-Cycle Page is created in React by using HTML, Tailwind, AOS and animation libraries",
      },

      {
        Name: "Crypto Currency",
        livelink: "https://fantastic-caramel-cf1559.netlify.app",

        imageLink: crypto,
        shortdescription:
          "It is created in React by using javascript, tailwind, AOS, Framer-motion libraries ",
      },
     
      {
        Name: "We-Learn",
        livelink: "https://statuesque-genie-1e16ab.netlify.app",

        imageLink: cambly,
        shortdescription:
          "It is created in React by using HTML, CSS, tailwind",
      },
    ],
  },
};

export default data;
