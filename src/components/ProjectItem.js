import React from "react"
import styles from "./Projects.module.css";

export default (props) => (
  <li className={styles.list}>
    <div>
      <h2>
        {props.title} <a className={styles.link} href={props.url}>Github</a>
      </h2>
      <p>
        {props.description}
      </p>
    </div>
  </li >
)
