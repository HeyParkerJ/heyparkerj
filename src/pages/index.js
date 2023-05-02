import React from "react";
import Layout from "../components/layout";
import image from "./parker3.png";
import Image from "next/image";

import * as styles from "./index.module.css";

const index = () => (
  <Layout>
    <div className={styles.bodyText}>
      <Image src={image} className={styles.image} alt="" />
      <p>
        <strong>My name is Parker Johnson, and I build software.</strong>{" "}
        Currently, I'm helping{" "}
        <a
          href="https://www.nwea.org/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          NWEA
        </a>{" "}
        improve their reporting landscape to help teachers and principals better
        understand student performance.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        I love creating things and solving problems, and I'm deeply driven to
        habitually improve, deliver quickly, and learn continuously. I pride
        myself on communication and building trust.
      </p>
      <p>
        I'm always looking for fun to have and stuff to build. If you want to
        work together,{" "}
        <a href="mailto:parkerjohnsonwebdev@gmail.com" className={styles.link}>
          shoot me an email!
        </a>
      </p>
    </div>
  </Layout>
);

export default index;
