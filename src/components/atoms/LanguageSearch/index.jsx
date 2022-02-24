import React from "react";

import styles from "./LanguageSearch.module.scss";

export default function LanguageSearch({onInput}) {
  return (
    <div className={styles.box}>
      <input className={styles.input} onInput={(e) => {onInput(e.target.value)}} type="text" autoFocus />
      <svg className={styles.svg}>
        <use
          href={require(`@assets/svgs.svg`) + `#icon-magnifying-glass`}
        ></use>
      </svg>
    </div>
  );
}
