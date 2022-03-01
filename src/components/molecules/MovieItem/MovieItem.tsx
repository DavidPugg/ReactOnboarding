import notfound from "@assets/notfound.png";
import "@css/progressbar.scss";
import classNames from "classnames";
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import TripleDot from "../TripleDot";
import styles from "./MovieItem.module.scss";

type Props = {
  id: number;
  img: string;
  title: string;
  release: string;
  rating: number;
  style?: object;
  border?: boolean;
};

export default function MovieItem({
  id,
  img,
  title,
  release,
  rating,
  style,
  border,
}: Props) {
  function returnImage() {
    if (img) return `https://image.tmdb.org/t/p/w500/${img}`;
    return notfound;
  }

  function returnColor() {
    if (rating * 10 < 30) {
      return "red";
    } else if (rating * 10 < 70) {
      return "yellow";
    } else {
      return "green";
    }
  }

  return (
    <div className={classNames(styles.box, border ? styles.border : "")}>
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
              text={rating * 10 == 0 ? "NR" : `${rating * 10}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "black",
                textColor: "#fff",
                pathColor: `${returnColor()}`,
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
