import React from 'react'
import styles from './About.module.scss'

import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    document.title = "Page Not Found | Portfolio";
  }, [])

  return (
    <div>
      <h1>About</h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut inventore sit laborum aspernatur vitae tenetur! Praesentium maiores recusandae eius beatae quae odio ab, distinctio placeat, molestiae rem facere vel perspiciatis, dicta numquam impedit! Totam omnis iusto veniam accusamus illo. Dolor tempore hic dolorum fugit quas ratione quaerat excepturi autem magni laboriosam quod, ad neque beatae natus vel vitae placeat, aut suscipit repellendus in rerum quasi repellat et. Eum obcaecati fugit nulla a, fuga nam ex error quasi repudiandae. Blanditiis neque voluptates non eaque laboriosam iusto voluptatibus dolorem accusantium ea aut quae unde quisquam, adipisci qui repellendus. Ut accusamus tenetur nihil.
    </div>
  )
}

export default About