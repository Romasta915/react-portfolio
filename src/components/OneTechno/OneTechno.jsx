import './OneTechno.scss'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'

export const OneTechno = forwardRef((props, mainRef) => {

  return (
    <div className='oneTech' title={props.name} ref={mainRef}>
      <img src={props.img} alt={`techology: ${props.name}`} />
    </div>
  )
})

export const MoOneTechno = motion(OneTechno)