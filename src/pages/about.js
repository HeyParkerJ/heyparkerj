import React from "react"
import Layout from '../components/layout'
import { Link } from "gatsby"

import styles from './about.module.css'

export default () => (
  <Layout>
    <h1 className={styles.header}>About</h1>
    <div className={styles.bodyText}>
      <p>
        I'm a full stack engineer with production experience in ReactJS, Node, Java, SQL, and of course the ever lovely trio of HTML, Javascript and CSS. I pride myself on thinking about the bigger picture and applying critical thinking, context, and clear goals before proposing a solution.
      </p>
      <p>
        Outside the office, I've tinkered with a small handful of <Link to="/projects" className={styles.link}>projects</Link> and had the pleasure of building a landing page for an Arizona Barcade.
      </p>
      <p>
        For the fun parts - I love beer, burritos, geeking out about ancient Sith lore (it's still canon to me, dammit), keeping up with tech news, and fragging out with friends on the PC.
      </p>
    </div>
  </Layout>
)
