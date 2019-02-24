import React from "react"
import Layout from '../components/layout'

import styles from './blog.module.css'

export default () => (
  <Layout>
    <h1 className={styles.header}>Blog</h1>
    <div className={styles.bodyText}>
      <p>Aaaaand there's nothing here. Big surprise, right?</p>
      <p>I'm working on it, promise.</p>
    </div>
  </Layout>
)
