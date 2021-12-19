import React from "react"
import Layout from '../components/layout'
import Projects from '../components/Projects'

import styles from './projects.module.css'

export default () => (
  <Layout>
    <h1 className={styles.header}>Projects</h1>
    <Projects />
  </Layout>
)
