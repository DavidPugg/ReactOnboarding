import React from "react";
import styles from "./SearchPersonItem.module.scss";
import Image from 'next/image'

type Props = {
  name: string,
  known_for: string,
  movie: string,
  img: string,
}

export default function SearchPersonItem({ name, known_for, movie, img }: Props) {
  function returnImage() {
    if (img) return `https://image.tmdb.org/t/p/w500/${img}`;
    return '/personnotfound.png';
  }

  return (
    <div className={styles.item}>
                <Image className={styles.img} src={returnImage()} alt='Movie poster' width='80' height='120' />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p>
          {known_for} • {movie}
        </p>
      </div>
    </div>
  );
}
