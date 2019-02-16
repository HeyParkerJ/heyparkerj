import React from "react"
import Header from './Header'
import styles from './layout.module.css'

export default ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
  </div>
)
