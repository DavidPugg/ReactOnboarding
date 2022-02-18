import React from "react";

import classes from "../../css/modules/popular.module.scss";

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import "../../css/progressbar.scss";

export default function MovieItem({ img, title, release, rating }) {
  return (
    <div>
      <div className={classes.imgbox}>
        <img
          className={classes.img}
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt="Movie poster"
        />
        <div className={classes.rating}>
        <CircularProgressbar
        value={rating * 10}
        text={`${rating * 10}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "black",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />
        </div>
      </div>
      <h3 className={classes.movietitle}>{title}</h3>
      <p className={classes.release}>{release}</p>
    </div>
  );
}
