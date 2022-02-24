import React from "react";

import styles from "./MainLanguageOption.module.scss";

export default function LanguageOption({ label, code }) {
  return (
    <p className={styles.label}>
      {label} ({code}-{code.toUpperCase()})
      <svg className={styles.svg}>
        <use href={require(`@assets/svgs.svg`) + `#icon-arrow`}></use>
      </svg>
    </p>
  );
}
