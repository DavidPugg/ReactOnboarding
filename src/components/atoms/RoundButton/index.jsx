import React from "react";

import styles from "./RoundButton.module.scss";

export default function RoundButton({ icon, text }) {
  return (
    <div className={styles.item}>
      <svg className={styles.svg}>
        <use href={require(`@assets/svgs.svg`) + `#icon-${icon}`}></use>
      </svg>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
