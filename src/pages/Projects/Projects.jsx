import './Projects.scss'

import MotoEmporium from "../../assets/images/projects-img/MotoEmporium.png"
import BestHomeFood from "../../assets/images/projects-img/Best-home-food.jpg"
import LazyDog from "../../assets/images/projects-img/LazyDog.jpg"

import OneProject from '../../components/OneProject/OneProject'

const Projects = () => {

  const projectsArr = [
    {
      title: "MotoEmporium",
      description: {
        en: "Інтернет магазин мотоциклів, розроблено в команді. Проект складається із клієнтської та серверної частини, також реалізовано панель адміністратора.",
        ua: "Інтернет магазин  Використані технології: "
      },
      imgPath: MotoEmporium,
      mainLink: "http://motoemporium.rf.gd",
      toRepoLink: "asdv",
      projectType: "react",
      tags: "React, Axios, MobX, Formik + Yup, I18next, react-jwt, SCSS, NodeJs, MongoDB, Mongoose"
    },
    {
      title: "Best home food",
      description: {
        en: "Restaurant",
        ua: "Ресторан"
      },
      imgPath: BestHomeFood,
      mainLink: "",
      toRepoLink: "",
      projectType: "js",
      tags: ""
    },
    {
      title: "LazyDog",
      description: {
        en: "Restaurant",
        ua: "Ресторан"
      },
      imgPath: LazyDog,
      mainLink: "",
      toRepoLink: "",
      projectType: "js",
      tags: ""
    }
  ]

  return (
    <div className='projects'>
      <div className="title">Projects</div>
      <div className="projects__content | row mx-0">
        {
          projectsArr.map((proj) => {
            return <OneProject key={proj.title} data={proj}></OneProject>
          })
        }
      </div>
    </div>
  )
}

export default Projects