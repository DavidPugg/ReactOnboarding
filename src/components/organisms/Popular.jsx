import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieItem from "../molecules/MovieItem";

import classes from "../../css/modules/popular.module.scss";

export default function Popular() {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("movie");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
      )
      .then((res) => setItems(res.data.results));
  }, []);

  function handleItems(type) {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        setItems(res.data.results);
        setType(type);
      });
  }

  return (
    <div className="container">
      <div className={classes.titlebox}>
        <h2 className={classes.title}>What's Popular</h2>
        <div className={classes.select}>
          <div
            onClick={() => handleItems("tv")}
            className={`${classes.option} ${
              type == "tv" ? classes.selected : ""
            }`}
          >
            On TV
          </div>
          <div
            onClick={() => handleItems("movie")}
            className={`${classes.option} ${
              type == "movie" ? classes.selected : ""
            }`}
          >
            In Theaters
          </div>
        </div>
      </div>

      <div className={classes.main}>
        {type == "movie" &&
          items.map(
            ({ id, poster_path, title, release_date, vote_average }) => (
              <MovieItem
                key={id}
                img={poster_path}
                title={title}
                release={release_date}
                rating={vote_average}
              />
            )
          )}

        {type == "tv" &&
          items.map(
            ({ id, poster_path, name, first_air_date, vote_average }) => (
              <MovieItem
                key={id}
                img={poster_path}
                title={name}
                release={first_air_date}
                rating={vote_average}
              />
            )
          )}
      </div>
    </div>
  );
}
