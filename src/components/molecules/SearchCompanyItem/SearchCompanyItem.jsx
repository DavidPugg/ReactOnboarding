import React from "react";

import c from "./SearchCompanyItem.module.scss";

export default function SearchPersonItem({ name, img, country }) {
  return (
    <div className={c.item}>
      <h4 className={c.name}>{name}</h4>
      {img && (
        <img
          className={c.img}
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt="Company"
        />
      )}
      {country && <p className={c.country}>{country}</p>}
    </div>
  );
}
