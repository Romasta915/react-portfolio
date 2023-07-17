
import MotoEmporium from "../../assets/images/projects-img/MotoEmporium.png"
import BestHomeFood from "../../assets/images/projects-img/Best-home-food.jpg"
import LazyDog from "../../assets/images/projects-img/LazyDog.jpg"

const ProjectsArr = [
  // hosted projects
  {
    title: "MotoEmporium",
    description: {
      en: "An online motorcycle store developed in a team. The project consists of a client and server side, as well as an admin panel.",
      ua: "Інтернет магазин мотоциклів, розроблявся в команді. Проект складається із клієнтської та серверної частини, також реалізовано панель адміністратора."
    },
    imgPath: MotoEmporium,
    mainLink: "http://motoemporium.rf.gd",
    toRepoLink: "https://github.com/Salamakha5/MotoEmporium",
    projectType: "react",
    tags: "React, Axios, MobX, Formik + Yup, I18next, react-jwt, SCSS, Bootstrap, NodeJs, MongoDB, Mongoose"
  },
  {
    title: "Best home food",
    description: {
      en: "An experimental project on using animations with regular JS",
      ua: "Експериментальний проект по використанню динамічних анімацій за допомогою звичайного JS."
    },
    imgPath: BestHomeFood,
    mainLink: "https://romasta915.github.io/Best_home_food/",
    toRepoLink: "https://github.com/Romasta915/Best_home_food",
    projectType: "js",
    tags: "HTML, CSS, JS, magicCss, SwiperJS"
  },
  {
    title: "LazyDog",
    description: {
      en: "Layout for the restaurant \"Lazy Dog\" (using the rem method).",
      ua: "Верстка для ресторану \"Лінивий Пес\" (використовуючи rem спосіб)."
    },
    imgPath: LazyDog,
    mainLink: "https://romasta915.github.io/LazyDog/index.html",
    toRepoLink: "https://github.com/Romasta915/LazyDog",
    projectType: "js",
    tags: "HTML, SCSS, JS, Mobile version"
  },
  // local projects
  // {
  //   title: "Audio Player",
  //   description: {
  //     en: "",
  //     ua: ""
  //   },
  //   imgPath: AudioPlayer,
  //   mainLink: window.location.origin + "/projects/Audio player/index.html",
  //   toRepoLink: "",
  //   projectType: "js",
  //   tags: "HTML, SCSS, JS"
  // }
]

export default ProjectsArr