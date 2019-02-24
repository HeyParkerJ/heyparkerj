import React from "react"
import Layout from '../components/layout'
import image from './parker.jpeg'

import styles from './index.module.css'

export default () => (
  <Layout>
    <h1 className={styles.header}>
      <img src={image} className={styles.image} alt="A picture of Parker"/>
      Hi! I'm Parker.
    </h1>
    <div className={styles.bodyText}>
      <p>
        I forge code, smite burritos, and like my lists in threes.
      </p>
      <p>
        My goal is to combine pragmatic development process with my thirst to create valuable things. I care deeply about delivering quickly, iterating forward and continuous learning.
      </p>
      <p>
        I'm always looking for fun to have and stuff to build. If you want to work together, <a href="mailto:parkerjohnsonwebdev@gmail.com" className={styles.link}>shoot me an email!</a>
      </p>
    </div>
  </Layout>
)
