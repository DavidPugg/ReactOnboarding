import React from "react";
import { Link } from "react-router-dom";

import styles from "./SearchMovieItem.module.scss";

import notfound from "../../../assets/notfound.png";

export default function SearchMovieItem({ id, img, title, release }) {
  function returnImage() {
    if (img) return `https://image.tmdb.org/t/p/w500/${img}`;
    return notfound;
  }

  return (
    <Link className={styles.link} to={`/movie/${id}`}>
      <div className={styles.item}>
        <img className={styles.img} src={returnImage()} alt="Movie poster" />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.release}>{release}</p>
        </div>
      </div>
    </Link>
  );
}
