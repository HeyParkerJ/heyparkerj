import React from "react"
import Layout from '../components/layout'
import Projects from '../components/Projects'

import image from './contributions.png'
import * as styles from './projects.module.css'

export default () => (
  <Layout>
    <h1 className={styles.header}>Projects</h1>
    <Projects />
    <hr className={styles.divider} />
    <img className={styles.ghContributions} src={image} alt="" />
  </Layout>
)
