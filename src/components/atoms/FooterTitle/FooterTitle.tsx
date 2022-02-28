import React from "react";

import styles from "./FooterTitle.module.scss";

type Props = {
  label: string;
};

export default function FooterTitle({ label }: Props) {
  return <h4 className={styles.title}>{label}</h4>;
}
