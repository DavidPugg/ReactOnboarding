import React from "react";
import styles from "./HomeTemplate.module.scss";


function HomeTemplate({ header, footer, children }) {
  return (
    <div className={styles.wrapper}>
      <header>{header}</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
}

export default HomeTemplate;
