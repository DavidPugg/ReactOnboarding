import React from "react";
import styles from "./FooterLink.module.scss";

export default function FooterLink({ label, url }) {
  return (
    <a className={styles.link} href={url}>
      {label}
    </a>
  );
}
