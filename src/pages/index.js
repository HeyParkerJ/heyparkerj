import React from "react"
import Layout from '../components/layout'

import styles from './index.module.css'

export default () => (
  <Layout>
    <h1 className={styles.header}>Hi! I'm Parker.</h1>
    <div className={styles.bodyText}>
      <p>
        I forge code, smite burritos, and like my lists in threes.
      </p>
      <p>
        As a dude playing a developer - I love ReactJS, keyboard shortcuts, the open web, a moderated approach to hype trains, and finding just the right album to flow to.
      </p>
      <p>
        As a dude playing a dude - I'm passionate about fantasy football, music, eSports, athletic endeavors, and discovering hole-in-the-wall burrito shops.
      </p>
    </div>
  </Layout>
)
