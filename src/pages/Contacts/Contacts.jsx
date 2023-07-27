import './Contacts.scss'

import StarCanvas from "../../components/StarCanvas/StarCanvas";
import CopyItem from '../../components/CopyItem/CopyItem';
import { translateFromLeft } from '../../components/AnimItems/AnimPatterns'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

const Contacts = () => {

  useEffect(() => {
    document.title = "Home | Contacts";
  }, [])

  return (
    <div className='contacts'>
      <div className='contacts__bgCanvas'><StarCanvas setWidth='100%' setHeight='100vh' /></div>

      <div className="contacts__content | row mx-0">
        <motion.div className="dev-item | col-sm-12 col-md-6 col-xl-4"
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={translateFromLeft}
          custom={1}>
          <div className="mail-wrap m-1 ms-0 fs-2">
            <i className="mail-icon bi bi-envelope-at me-2 fs-3"></i>
            romastal915@gmail.com
            {/* <CopyItem parentClass='fs-5 copy-email' text="romastal915@gmail.com" /> */}
          </div>

          <div className="m-1 ms-0 fs-2">
            <i className="bi bi-geo-alt me-2 fs-3"></i>
            Lviv, Ukraine
          </div>

          <div className='my-3'>
            <a className="cp-btn cp-btn--cyan github-btn" href="https://github.com/Romasta915" target="_blank">
              <i className="bi bi-github | me-2"></i><span>Github</span></a>
          </div>

          <div>
            <a className="cp-btn cp-btn--yellow linkedin-btn" href="https://www.linkedin.com/in/roman-shavala-346899268/" target="_blank">
              <i className="bi bi-linkedin | me-2"></i><span>Linkedin</span></a>
          </div>
        </motion.div>
        <div className='col-12 col-xl-8 googleMapWrap'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.6848163016!2d23.929834985201413!3d49.83265984420705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1690459215837!5m2!1suk!2sua" style={{ border: 0 }} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contacts