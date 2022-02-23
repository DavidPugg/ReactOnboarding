import React from "react";

import styles from "./SearchToggle.module.scss";

export default function SearchToggle({ onToggle }) {
  return (
    <svg className={styles.svg} onClick={() => onToggle()}>
      <use href={require(`@assets/svgs.svg`) + `#icon-magnifying-glass`}></use>
    </svg>
  );
}
