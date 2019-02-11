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
        As a professional - I take pride in my eagerness to learn and challange the things I thought I already knew, the connections I make with people, my knack for seeing the big picture, my written communication skills, and my attention to detail.
      </p>
      <p>
        As a developer - I love keyboard shortcuts, ReactJS, the open web, a moderated approach to hype trains, and finding just the right album to flow to.
      </p>
      <p>
        As a human - I'm passionate about fantasy football, music, eSports, athletic endeavors, and hole-in-the-wall burrito shops.
      </p>
    </div>
  </Layout>
)
