import React from "react";

import styles from './MainTemplate.module.scss'

function MainTemplate({ header, sidebar, content, footer }) {
  return (
    <div className={styles.wrapper}>
      <header>{header}</header>
      <div className="container">
        <main className={styles.main}>
          <div className={styles.sidebar}>{sidebar}</div>
          <div className={styles.content}>{content}</div>
        </main>
      </div>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
}

export default MainTemplate;
