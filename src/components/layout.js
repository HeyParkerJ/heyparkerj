import React from "react"
import Header from './header'
import styles from './layout.module.css'

export default ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
  </div>
)
