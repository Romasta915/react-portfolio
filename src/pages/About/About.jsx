import './About.scss'

import my_photo from '../../assets/images/my-photo.jpg'

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {

  useEffect(() => {
    document.title = "About | Portfolio";
  }, [])

  const { t } = useTranslation();

  return (
    <div className='about | row mx-0'>
      <div className="col-7 | left px-0">
        <div className='content'>
          <h1 className='title'>{t('about.title')}</h1>
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
        <img src={my_photo} />
      </div>
    </div>
  )
}

export default About