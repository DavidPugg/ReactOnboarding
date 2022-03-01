import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import MovieItem from "../../molecules/MovieItem/MovieItem";
import styles from "./PopularContent.module.scss";

type Movies = Array<{
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
}>;

export default function PopularContent() {
  const movies: Movies = useSelector((state: RootStateOrAny) => state.movies.value);

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
