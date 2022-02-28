import React, { useEffect } from "react";

import styles from "./PopularContent.module.scss";

import { useSelector } from "react-redux";

import MovieItem from "../../molecules/MovieItem/MovieItem";

export default function PopularContent() {
  const movies = useSelector((state) => state.movies.value)

  return (
    <div className={styles.grid}>
      {movies.map(({ id, poster_path, title, release_date, vote_average }) => (
        <MovieItem
          key={id}
          id={id}
          border
          img={poster_path}
          title={title}
          release={release_date}
          rating={vote_average}
        />
      ))}
    </div>
  );
}
