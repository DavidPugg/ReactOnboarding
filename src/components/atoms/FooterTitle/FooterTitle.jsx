import React from "react";

import styles from './FooterTitle.module.scss'

export default function FooterTitle({ label }) {
  return <h4 className={styles.title}>{label}</h4>;
}
