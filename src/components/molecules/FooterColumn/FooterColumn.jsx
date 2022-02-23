import React from "react";

import styles from './FooterColumn.module.scss'

import FooterTitle from "../../atoms/FooterTitle/FooterTitle";
import FooterLink from "../../atoms/FooterLink/FooterLink";

export default function FooterColumn({ label, links }) {
  return (
    <div className={styles.column}>
      <FooterTitle label={label} />
      {links.map(({ label, url }) => (
        <FooterLink key={label} label={label} url={url} />
      ))}
    </div>
  );
}
