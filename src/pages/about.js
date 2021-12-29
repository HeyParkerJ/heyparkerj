import React from "react"
import Layout from '../components/layout'
import { Link } from "gatsby"

import * as styles from './about.module.css'

export default () => (
  <Layout>
    <h1 className={styles.header}>About</h1>
    <div className={styles.bodyText}>
      <p>
        I'm a full stack engineer with production experience in ReactJS, Node, Java, SQL, and the lovely trio of HTML, Javascript and CSS.
      </p>
      <p>
        Outside the office, I've tinkered with a small handful of <Link to="/projects" className={styles.link}>projects</Link> and had the pleasure of building a landing page for the late Arizona Barcade, Bonus Round.
      </p>
      <p>
        On a personal note, I stay very active, have been enjoying learning woodworking, play in a dedicated fantasy football league with my best friends (which drives a lot of ideas for projects), and I have two dogs!
      </p>
    </div>
  </Layout>
)
