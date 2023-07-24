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

      <div className="contacts__content">
        <motion.div className="dev-item"
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={translateFromLeft}
          custom={1}>
          <div className="mail-wrap m-1 ms-0 fs-2">
            <i className="mail-icon bi bi-envelope-at me-2 fs-5"></i>
            romastal915@gmail.com
            <CopyItem parentClass='fs-5 copy-email' text="romastal915@gmail.com" />
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
      </div>
    </div>
  )
}

export default Contacts