import React from "react";

import c from "./SearchPersonItem.module.scss";

import notfound from "../../../assets/personnotfound.png";

export default function SearchPersonItem({ name, known_for, movie, img }) {
  function returnImage() {
    if (img) return `https://image.tmdb.org/t/p/w500/${img}`;
    return notfound;
  }

  return (
    <div className={c.item}>
      <img className={c.img} src={returnImage()} alt="Movie poster" />
      <div className={c.content}>
        <h3 className={c.name}>{name}</h3>
        <p>
          {known_for} • {movie}
        </p>
      </div>
    </div>
  );
}
