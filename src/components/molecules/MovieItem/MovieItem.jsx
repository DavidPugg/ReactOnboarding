import React from "react";
import { Link } from "react-router-dom";
import TripleDot from "../TripleDot";

import styles from "./MovieItem.module.scss";

import notfound from '@assets/notfound.png'

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "@css/progressbar.scss";
import classNames from "classnames";

export default function MovieItem({ id, img, title, release, rating, style, border }) {

  function returnImage() {
    if (img) return `https://image.tmdb.org/t/p/w500/${img}`;
    return notfound;
  }
  return (
    <div className={classNames(styles.box, border ? styles.border : '')}>
      <TripleDot />
      <Link className={styles.link} to={`/movie/${id}`}>
        <div className={styles.imgbox}>
          <img
          style={style}
            className={styles.img}
            src={returnImage()}
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
        <div className={styles.textbox}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.release}>{release}</p>
        </div>
      </Link>
    </div>
  );
}
