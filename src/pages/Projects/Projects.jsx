import './Projects.scss'

import OneProject from '../../components/OneProject/OneProject'
import ProjectsArr from './ProjectsArr'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const Projects = () => {

  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Projects | Portfolio";
  }, [])

  return (
    <div className='projects'>
      <div className="title">{t('projects.title')}</div>
      <div className="projects__content | row mx-0">
        {
          ProjectsArr.map((proj) => {
            return <OneProject key={proj.title} data={proj}></OneProject>
          })
        }
      </div>
    </div>
  )
}

export default Projects