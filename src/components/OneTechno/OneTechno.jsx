import './OneTechno.scss'

import { forwardRef } from 'react'

import { motion } from 'framer-motion'

export const OneTechno = forwardRef((props, ref) => {

  return (
    <div className='oneTech movingBorder' title={props.name} ref={ref}>
      <img src={props.img} alt="techology" />
    </div>
  )
})

export const MoOneTechno = motion(OneTechno)