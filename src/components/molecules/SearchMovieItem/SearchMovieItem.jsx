import React from "react";

import c from "./SearchMovieItem.module.scss";

import notfound from "../../../assets/notfound.png";

export default function SearchMovieItem({ img, title, release }) {
  function returnImage() {
    if (img) return `https://image.tmdb.org/t/p/w500/${img}`;
    return notfound;
  }

  return (
    <div className={c.item}>
      <img
        className={c.img}
        src={returnImage()}
        alt="Movie poster"
      />
      <div className={c.content}>
        <h3 className={c.title}>{title}</h3>
        <p className={c.release}>{release}</p>
      </div>
    </div>
  );
}
