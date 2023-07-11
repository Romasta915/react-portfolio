import './About.scss'

import my_photo from '../../assets/images/my-photo.jpg'
import nodeJs from '../../assets/images/icons/nodeJs.png'
import react from '../../assets/images/icons/react.png'
import html_css_js from '../../assets/images/icons/html-css-js.png'
import databases from '../../assets/images/icons/databases.png'
import git from '../../assets/images/icons/git.png'
import diploma_en from '../../assets/images/diploma_en.png'
import diploma_ua from '../../assets/images/diploma_ua.png'

import os from '../../assets/images/icons/os.png'
import ide from '../../assets/images/icons/vs-code.png'
import postman from '../../assets/images/icons/postman-api.png'
import site from '../../assets/images/icons/site.png'

import TextAppearance from '../../components/AnimItems/TextAppearance/TextAppearance'
import { MoOneTechno } from '../../components/OneTechno/OneTechno'
import clientStore from '../../store/clientStore'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { observer } from "mobx-react-lite"

const About = observer(() => {

  let techArr = [
    { img: html_css_js, name: 'HTML, CSS, JS' },
    { img: react, name: 'React' },
    { img: nodeJs, name: 'NodeJs' },
    { img: databases, name: 'MongoDB' },
    { img: git, name: 'Git' },
  ]

  let toolsArr = [
    { img: os, name: 'Windows 11' },
    { img: ide, name: 'VS Code' },
    { img: postman, name: 'Postman' },
    { img: site, name: 'Also, many others...' },
  ]

  const opacity = {
    initial: { opacity: 0 },
    animate: custom => ({ opacity: 1, transition: { delay: custom * 0.2 } }),
    transition: { duration: 2 },
  }

  const translate = {
    initial: { opacity: 0, transform: 'translateX(100%) translateY(-100%)' },
    animate: custom => ({ opacity: 1, transform: 'translateX(0) translateY(0)', transition: { delay: custom * 0.2 } }),
    transition: { duration: 2 },
  }

  useEffect(() => {
    document.title = "About | Portfolio";
  }, [])

  const [diplomaIsOpen, setDiplomaIsOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <div className='about'>
      <section className='section1 | row mx-0'>
        <div className="col-7 | left px-0">
          <div className='content'>
            <div className='title'><TextAppearance text={t('about.title')} delayOneChar={.08} /></div>
            <motion.div className='text'
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
            >
              <motion.p variants={opacity} custom={1}>
                {t('about.p-1')}
                <button class="diploma-btn" type="button" data-bs-toggle="collapse" data-bs-target="#diplomaCont" aria-expanded="false" aria-controls="diplomaCont"
                  onClick={() => setDiplomaIsOpen(!diplomaIsOpen)}>
                  {diplomaIsOpen ? t('about.btn-diploma-hide') : t('about.btn-diploma-text')}
                </button>
                <div class="collapse p-0" id="diplomaCont">
                  <div class="card card-body p-0">
                    <img src={clientStore.currentLang === "en" ? diploma_en : diploma_ua} alt='diploma img' />
                  </div>
                </div>
              </motion.p>
              <motion.p variants={opacity} custom={2}>{t('about.p-2')}</motion.p>
              <motion.p variants={opacity} custom={3}>{t('about.p-3')}</motion.p>
              <motion.p variants={opacity} custom={4}>{t('about.p-4')}</motion.p>
              <motion.p variants={opacity} custom={5}>{t('about.p-5')}</motion.p>
            </motion.div>
          </div>
        </div>
        <div className="col-5 | right px-0">
          <motion.img
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={translate}
            custom={1}
            src={my_photo} alt='my_photo' />
        </div>
      </section>
      <section className='section2'>
        <div className='tech'>
          <div className='title'><TextAppearance text={t('about.skillset')} delayOneChar={.05} /></div>
          <div className='techCont'>
            {
              techArr.map((e, index) => {
                return <MoOneTechno key={e.img} img={e.img} name={e.name}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  variants={opacity}
                  custom={index}
                />
              })
            }
          </div>
        </div>
        <div className="tools">
          <div className='title'><TextAppearance text={t('about.toolsIuse')} delayOneChar={.05} /></div>
          <div className='toolsCont'>
            {
              toolsArr.map((e, index) => {
                return <MoOneTechno key={e.img} img={e.img} name={e.name}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  variants={opacity}
                  custom={index}
                />
              })
            }
          </div>
        </div>
      </section>
    </div >


  )
})

export default About