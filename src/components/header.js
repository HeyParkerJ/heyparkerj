import React from "react"
import { Link } from "gatsby"
import * as styles from './header.module.css'

const NavElement = props =>
  <li className={styles.list}>
    <Link to={props.to}
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      {props.children}
    </Link>
  </li>

// const PartialNavElement = props =>
//   <li className={styles.list}>
//     <Link to={props.to}
//       className={styles.link}
//       activeClassName={styles.activeLink}
//       getProps={({ isPartiallyCurrent }) =>
//         isPartiallyCurrent
//           ? { className: styles.activeLink }
//           : { className: styles.link }}
//     >
//       {props.children}
//     </Link>
//   </li>

const Header = () => (
  <nav className={styles.header}>
    <ul className={styles.nav}>
      <NavElement to="/">Home</NavElement>
      <NavElement to="/projects">Projects</NavElement>
      <NavElement to="/about">About</NavElement>
    </ul>
  </nav>
)

export default Header;
