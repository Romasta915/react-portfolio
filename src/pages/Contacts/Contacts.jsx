import './Contacts.scss'

import StarCanvas from "../../components/StarCanvas/StarCanvas";
import CopyItem from '../../components/CopyItem/CopyItem';

import { useEffect } from 'react'
import { motion } from 'framer-motion'

const Contacts = () => {

  useEffect(() => {
    document.title = "Home | Contacts";
  }, [])

  const translate = {
    initial: { opacity: 0, transform: 'translateX(-100%)' },
    animate: custom => ({ opacity: 1, transform: 'translateX(0) translateY(0)', transition: { delay: custom * 0.2 } }),
    transition: { duration: 3 },
  }

  return (
    <div className='contacts'>
      <div className='contacts__bgCanvas'><StarCanvas setWidth='100%' setHeight='100vh' /></div>

      <div className="contacts__content">
        <motion.div className="dev-item"
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={translate}
          custom={1}>
          <div className="m-1 ms-0 fs-2">
            <i className="bi bi-envelope-at | me-2"></i>
            romastal915@gmail.com
            <CopyItem parentClass='fs-5 ms-3 copy-email' text="romastal915@gmail.com" />
          </div>

          <div className='my-3'>
            <a class="cp-btn cp-btn--cyan github-btn" href="https://github.com/Romasta915" target="_blank">
              <i className="bi bi-github | me-2"></i><span>Github</span></a>
          </div>

          <div>
            <a class="cp-btn cp-btn--yellow linkedin-btn" href="https://www.linkedin.com/in/roman-shavala-346899268/" target="_blank">
              <i className="bi bi-linkedin | me-2"></i><span>Linkedin</span></a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contacts