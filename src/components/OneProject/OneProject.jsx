import './OneProject.scss'

import clientStore from '../../store/clientStore'

import React from 'react'
import { observer } from "mobx-react-lite"

const OneProject = observer((props) => {

  const { title, description, imgPath, mainLink, toRepoLink, projectType, tags } = props.data

  return (
    <div className='oneProject__wrap | col-4'>
      <div className='oneProject'>

        <div className="imgCont">
          <img className='proj_img' src={imgPath} alt="projects img" />
        </div>
        <div className='content'>
          <div className="title">{title}</div>
          <div className='description'>
            {clientStore.currentLang === "en" ? description.en : null}
            {clientStore.currentLang === "ua" ? description.ua : null}
            {tags.length !== 0 ? <><br />Technologies used: {tags}</> : null}
          </div>

          <div className='buttonsCont'>

            {
              toRepoLink.length !== 0 ?
                <a href={toRepoLink} target="_blank">
                  <button className="cybr-btn toRepo" title="link to the repository">
                    <i className="bi bi-github"></i>
                    <span aria-hidden className="cybr-btn__glitch">
                      <i className="bi bi-github"></i>
                    </span>
                  </button>
                </a> : null
            }

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
  )
})

export default OneProject