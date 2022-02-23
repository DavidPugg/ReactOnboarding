import React from "react";
import { Link } from "react-router-dom";

import styles from "./MovieItem.module.scss";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "../../../css/progressbar.scss";

export default function MovieItem({ id, img, title, release, rating }) {
  return (
    <Link className={styles.link} to={`/movie/${id}`}>
        <div className={styles.imgbox}>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w500/${img}`}
            alt="Movie poster"
          />
          <div className={styles.rating}>
            <CircularProgressbar
              value={rating * 10}
              text={`${rating * 10}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "black",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </div>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.release}>{release}</p>
    </Link>
  );
}
