import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as styles from "./header.module.css";

const NavElement = (props) => {
  const router = useRouter();
  return (
    <li key={`li-${props.to}`} className={styles.list}>
      <Link
        href={props.to}
        className={
          router.pathname == props.to ? styles.activeLink : styles.link
        }
        key={`link-${props.to}`}
      >
        {props.children}
      </Link>
    </li>
  );
};

const Header = () => (
  <nav className={styles.header}>
    <ul className={styles.nav}>
      <NavElement to="/">Home</NavElement>
      <NavElement to="/projects">Projects</NavElement>
      <NavElement to="/about">About</NavElement>
    </ul>
  </nav>
);

export default Header;
