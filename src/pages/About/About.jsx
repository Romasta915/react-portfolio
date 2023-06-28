import './About.scss'

import my_photo from '../../assets/images/my-photo.jpg'
import nodeJs from '../../assets/images/icons/nodeJs.png'
import react from '../../assets/images/icons/react.png'
import html_css_js from '../../assets/images/icons/html-css-js.png'
import databases from '../../assets/images/icons/databases.png'
import git from '../../assets/images/icons/git.png'

import os from '../../assets/images/icons/os.png'
import ide from '../../assets/images/icons/vs-code.png'
import postman from '../../assets/images/icons/postman-api.png'
import site from '../../assets/images/icons/site.png'

import OneTechno from '../../components/OneTechno/OneTechno'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const About = () => {

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

  useEffect(() => {
    document.title = "About | Portfolio";
  }, [])

  const { t } = useTranslation();

  return (
    <div className='about'>
      <section className='section1 | row mx-0'>
        <div className="col-7 | left px-0">
          <div className='content'>
            <div className='title'>{t('about.title')}</div>
            <div className='text'>
              <p>{t('about.p-1')}</p>
              <p>{t('about.p-2')}</p>
              <p>{t('about.p-3')}</p>
              <p>{t('about.p-4')}</p>
              <p>{t('about.p-5')}</p>
            </div>
          </div>
        </div>
        <div className="col-5 | right px-0">
          <img src={my_photo} alt='my_photo' />
        </div>
      </section>
      <section className='section2'>
        <div className='tech'>
          <div className='title'>{t('about.skillset')}</div>
          <div className='techCont'>
            {
              techArr.map((e) => {
                return <OneTechno key={e.img} img={e.img} name={e.name} />
              })
            }
          </div>
        </div>
        <div className="tools">
          <div className='title'>{t('about.toolsIuse')}</div>
          <div className='toolsCont'>
            {
              toolsArr.map((e) => {
                return <OneTechno key={e.img} img={e.img} name={e.name} />
              })
            }
          </div>
        </div>
      </section>
    </div>


  )
}

export default About