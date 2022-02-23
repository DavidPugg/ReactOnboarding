import React from "react";

import styles from "./SearchPersonItem.module.scss";

import notfound from "../../../assets/personnotfound.png";

export default function SearchPersonItem({ name, known_for, movie, img }) {
  function returnImage() {
    if (img) return `https://image.tmdb.org/t/p/w500/${img}`;
    return notfound;
  }

  return (
    <div className={styles.item}>
      <img className={styles.img} src={returnImage()} alt="Movie poster" />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p>
          {known_for} • {movie}
        </p>
      </div>
    </div>
  );
}
