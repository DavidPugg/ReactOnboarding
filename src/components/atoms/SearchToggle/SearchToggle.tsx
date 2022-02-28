import React from "react";
import styles from "./SearchToggle.module.scss";

type Props = {
  onToggle: Function
}

export default function SearchToggle({ onToggle }: Props) {
  return (
    <svg className={styles.svg} onClick={() => onToggle()}>
      <use href={require(`@assets/svgs.svg`) + `#icon-magnifying-glass`}></use>
    </svg>
  );
}
