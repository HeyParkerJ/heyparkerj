import React from "react"
import styles from "./Projects.module.css";
import GHIcon from "./GitHub-Mark-32px.png"

export default (props) => (
  <li className={styles.list}>
    <div>
      <h2 className={styles.header}>
        {props.title} <a className={styles.ghLink} href={props.url}><img src={GHIcon} alt="link to github" /></a>
      </h2>
      <div>
        {
          props.icons ?
            props.icons.map((icon) => {
              return <img src={icon.url} alt={icon.name} />
            }) :
            null
        }
      </div>
      <p>
        {props.description}
      </p>
    </div>
  </li >
)
