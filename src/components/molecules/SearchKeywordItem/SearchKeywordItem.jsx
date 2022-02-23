import React from "react";

import styles from "./SearchKeywordItem.module.scss";

export default function SearchPersonItem({ name }) {
  return (
    <div className={styles.item}>
      <p className={styles.name}>{name}</p>
    </div>
  );
}
