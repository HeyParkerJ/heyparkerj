import React from "react"
import Header from './header'
import * as styles from './layout.module.css'

export default ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
  </div>
)
