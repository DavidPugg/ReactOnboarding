import React from "react";
import notfound from "../../../assets/personnotfound.png";
import styles from "./SearchPersonItem.module.scss";

type Props = {
  name: string,
  known_for: string,
  movie: string,
  img: string
}

export default function SearchPersonItem({ name, known_for, movie, img }: Props) {
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
