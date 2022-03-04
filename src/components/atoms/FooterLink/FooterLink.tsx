import React from "react";
import styles from "./FooterLink.module.scss";

type Props = {
  label: string,
  url: string
}

export default function FooterLink({ label, url }: Props) {
  return (
    <a className={styles.link} href={url}>
      {label}
    </a>
  );
}
