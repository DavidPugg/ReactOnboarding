import React from "react";
import styles from "./SearchCompanyItem.module.scss";

type Props = {
  name: string,
  img: string,
  country: string,
}

export default function SearchPersonItem({ name, img, country }: Props) {
  return (
    <div className={styles.item}>
      <h4 className={styles.name}>{name}</h4>
      {img && (
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt="Company"
        />
      )}
      {country && <p className={styles.country}>{country}</p>}
    </div>
  );
}
