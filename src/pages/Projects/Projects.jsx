import './Projects.scss'

import { MoOneProject } from '../../components/OneProject/OneProject'
import ProjectsArr from './ProjectsArr'
import { translateFromLeft, translateFromRight, translateFromBot, translateFromTop } from '../../components/AnimItems/AnimPatterns'

import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import mixitup from 'mixitup';

const Projects = () => {
  const containerRef = useRef();

  const { t } = useTranslation();

  const animArr = [translateFromLeft, translateFromRight, translateFromBot, translateFromTop]

  useEffect(() => {
    document.title = "Projects | Portfolio";

    mixitup(".filterCont", {
      selectors: {
        target: ".mix",
      },
      animation: {
        duration: 500
      }
    });
  }, [])

  return (
    <div className='projects'>
      <motion.div className="title"
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        variants={translateFromTop} custom={1}
      >{t('projects.title')}</motion.div>
      <div className="suptitle">{t('projects.suptitle')}</div>
      <motion.div ref={containerRef} className="mixitup-controls"
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}>

        <motion.div className='filterWrap' title='filter options'
          variants={translateFromLeft} custom={2}>
          <button className="filter-btn | cp-btn cp-btn--yellow" data-filter="all">all</button>
          <button className="filter-btn | cp-btn cp-btn--yellow" data-filter=".category-react">react</button>
          <button className="filter-btn | cp-btn cp-btn--yellow" data-filter=".category-js">js</button>
        </motion.div>

        <motion.div className='sortWrap' title='sorting options'
          variants={translateFromRight} custom={4}>
          <button className="sort-btn | cp-btn cp-btn--yellow" data-sort="default:asc">👇</button>
          <button className="sort-btn | cp-btn cp-btn--yellow" data-sort="default:desc">👆</button>
          <button className="sort-btn | cp-btn cp-btn--yellow" data-sort="random">🎲</button>
        </motion.div>
      </motion.div>
      <div className="projects__content filterCont | row mx-0">
        {
          ProjectsArr.map((proj, index) => {
            return <MoOneProject key={proj.title} data={proj}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={animArr[Math.floor(Math.random() * animArr.length)]} custom={index + 2}></MoOneProject>
          })
        }
      </div>
    </div>
  )
}

export default Projects