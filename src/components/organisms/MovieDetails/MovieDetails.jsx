import React, { useEffect } from "react";

import styles from "./MovieDetails.module.scss";

import RoundButton from "../../atoms/RoundButton";
import CrewList from "../../molecules/CrewList";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../../../css/progressbar.scss";

export default function MovieDetails({ details, crew }) {
  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    genres,
    runtime,
    vote_average,
    tagline,
    overview,
  } = details;

  const date = new Date(release_date);

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/w500/${backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "1rem 0",
  };

  return (
    <div style={backgroundStyle}>
      <div className={`container ${styles.content}`}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="Movie Poster"
        />
        <div className={styles.details}>
          <h3 className={styles.title}>
            {title} <span className={styles.year}>({date.getFullYear()})</span>
          </h3>
          <p className={styles.text}>
            {date.getMonth()}/{date.getDay()}/{date.getFullYear()} ·{" "}
            {Math.floor(runtime / 60)}h {runtime % 60}m
          </p>
          <div className={styles.rating_box}>
            <CircularProgressbar
              className={styles.rating}
              value={vote_average * 10}
              text={`${vote_average * 10}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "black",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
            <p className={styles.score}>User Score</p>
            <RoundButton
              icon="list"
              text="Login to create and edit custom lists"
            />
            <RoundButton
              icon="heart"
              text="Login to add this movie to your favorite list"
            />
            <RoundButton
              icon="bookmark"
              text="Login to add this movie to your watchlist"
            />
            <RoundButton icon="star" text="Login to rate this movie" />
          </div>
          <p className={styles.tagline}>{tagline}</p>
          <p className={styles.overview}>Overview</p>
          <p className={styles.overview_text}>{overview}</p>
          <CrewList crew={crew} />
        </div>
      </div>
    </div>
  );
}
