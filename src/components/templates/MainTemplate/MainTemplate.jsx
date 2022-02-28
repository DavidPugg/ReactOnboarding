import React from "react";
import styles from './MainTemplate.module.scss';


function MainTemplate({ header, sidebar, footer, children }) {
  return (
    <div className={styles.wrapper}>
      <header>{header}</header>
      <div className="container">
        <main className={styles.main}>
          <div className={styles.sidebar}>{sidebar}</div>
          <div className={styles.content}>{children}</div>
        </main>
      </div>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
}

export default MainTemplate;
