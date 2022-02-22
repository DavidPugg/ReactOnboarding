import React from "react";

import c from './MovieItem.module.scss'

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import "../../../css/progressbar.scss";

export default function MovieItem({ img, title, release, rating }) {
  return (
    <div>
      <div className={c.imgbox}>
        <img
          className={c.img}
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt="Movie poster"
        />
        <div className={c.rating}>
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
      <h3 className={c.title}>{title}</h3>
      <p className={c.release}>{release}</p>
    </div>
  );
}
