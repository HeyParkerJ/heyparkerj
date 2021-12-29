import React from "react"
import Header from './header'
import * as styles from './layout.module.css'

const layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
  </div>
)

export default layout;
