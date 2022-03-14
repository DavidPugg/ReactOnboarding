import React from "react";
import styles from "./SearchNetworkItem.module.scss";

type Props = {
  name: string;
  known_for: string;
  movie: string;
};

export default function SearchPersonItem({ name, known_for, movie }: Props) {
  return (
    <div className={styles.item}>
      <h3 className={styles.name}>{name}</h3>
      <p>
        {known_for} • {movie}
      </p>
    </div>
  );
}
