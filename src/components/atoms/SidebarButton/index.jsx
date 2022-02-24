import React from "react";

import styles from "./SidebarButton.module.scss";

export default function SidebarButton({ label, onClick, style }) {
  return (
    <p className={styles.label} onClick={onClick}>
      {label}
      <svg style={style} className={styles.svg}>
        <use href={require(`@assets/svgs.svg`) + `#icon-arrow`}></use>
      </svg>
    </p>
  );
}
