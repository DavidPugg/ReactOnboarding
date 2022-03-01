import React from "react";
import styles from "./HomeTemplate.module.scss";

type Props = {
  header: JSX.Element,
  footer: JSX.Element,
  children: JSX.Element|JSX.Element[]
}

function HomeTemplate({ header, footer, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <header>{header}</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
}

export default HomeTemplate;
