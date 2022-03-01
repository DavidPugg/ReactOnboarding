import React from "react";
import styles from './MainTemplate.module.scss';

type Props = {
  header: JSX.Element,
  footer: JSX.Element,
  sidebar: JSX.Element,
  children: JSX.Element|JSX.Element[]
}


function MainTemplate({ header, sidebar, footer, children }: Props) {
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
