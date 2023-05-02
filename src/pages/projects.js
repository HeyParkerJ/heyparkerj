import React from "react";
import Layout from "../components/layout";
import Projects from "../components/Projects";

import * as styles from "./projects.module.css";

const projects = () => (
  <Layout>
    <h1 className={styles.header}>Projects</h1>
    <Projects />
    {/* <img className={styles.ghContributions} src={image} alt="" /> */}
  </Layout>
);

export default projects;
