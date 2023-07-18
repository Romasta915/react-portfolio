import './OneProject.scss'

import clientStore from '../../store/clientStore'

import { observer } from "mobx-react-lite"
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const OneProject = observer(forwardRef((props, mainRef) => {

  const { title, description, imgPath, mainLink, toRepoLink, projectType, tags } = props.data

  return (
    <div className={`oneProject__wrap | col-4 mix category-${projectType}`} ref={mainRef}>
      <div className='oneProject'>
        <div className="imgCont">
          <img className='proj_img' src={imgPath} alt={`Project image: ${title.toUpperCase()}`} />
        </div>
        <div className='content'>
          <div className='description'>
            <div className="title">{title}</div>

            {description.ua.length > 0 ?
              clientStore.currentLang === "en" ? <>{description.en} <br /> <br /></> : <>{description.ua} <br /> <br /></>
              : null}

            {tags.length !== 0 ? <>{clientStore.currentLang === "en" ? "Technologies used: " : "Використані технології: "} {tags}</> : null}

            <div className='buttonsCont'>
              {toRepoLink.length !== 0 ?
                <a href={toRepoLink} target="_blank">
                  <button className="cybr-btn toRepo" title="link to the repository">
                    <i className="bi bi-github"></i>
                    <span aria-hidden className="cybr-btn__glitch">
                      <i className="bi bi-github"></i>
                    </span>
                  </button>
                </a> : null}

              <a href={mainLink} target='_blank'>
                <button className="toProject | cybr-btn">
                  Demo_
                  <span aria-hidden className="cybr-btn__glitch">Demo_</span>
                  <span aria-hidden className="cybr-btn__tag">rA9</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}))

export default OneProject

export const MoOneProject = motion(OneProject)