import React from "react";
import styles from "./SearchKeywordItem.module.scss";

type Props = {
  name: string
}

export default function SearchPersonItem({ name }: Props) {
  return (
    <div className={styles.item}>
      <p className={styles.name}>{name}</p>
    </div>
  );
}
