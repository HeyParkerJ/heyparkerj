import React from "react"
import styles from './header.module.css'

const NavElement = ({title}) =>
      <li className={styles.navElement}>
        {title}
      </li>

export default () => (
  <nav className={styles.header}>
    <ul className={styles.nav}>
      <NavElement title="Home" />
      <NavElement title="Blog" />
      <NavElement title="Projects" />
      <NavElement title="About" />
    </ul>
  </nav>
)
