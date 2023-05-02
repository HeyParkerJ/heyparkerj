import React from "react";
import * as styles from "./Projects.module.css";
import GHIcon from "./GitHub-Mark-32px.png";
import Image from "next/image";

const ProjectItem = (props) => (
  <li className={styles.list}>
    <div>
      <h2 className={styles.header}>
        {props.title}{" "}
        <a className={styles.ghLink} href={props.url}>
          <Image
            key={`github-img-${props.title}`}
            src={GHIcon}
            alt="link to github"
          />
        </a>
      </h2>
      <div key={`div2-${props.title}`}>
        {props.icons
          ? props.icons.map((icon) => {
              return (
                <Image
                  key={`image-${props.title}-${icon.name}`}
                  src={icon.url}
                  alt={icon.name}
                  width={"86"}
                  height={"28"}
                />
              );
            })
          : null}
      </div>
      <p>{props.description}</p>
    </div>
  </li>
);

export default ProjectItem;
