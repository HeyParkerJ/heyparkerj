import React from "react"
import Layout from '../components/layout'
import Projects from '../components/Projects'

import image from './contributions.png'
import styles from './projects.module.css'

export default () => (
  <Layout>
    <h1 className={styles.header}>Projects</h1>
    <Projects />
    <hr style={{ "margin": "0 0 1rem 0" }} />
    <img style={{ margin: "0 0 1rem 0" }} src={image} alt="" />
  </Layout>
)
