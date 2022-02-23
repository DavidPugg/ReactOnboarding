import React from "react";

import { useParams } from "react-router-dom";

import styles from "./SearchContent.module.scss";

import SearchMovieItem from "@components/molecules/SearchMovieItem"; //for movies, shows and companies
import SearchPersonItem from "../../molecules/SearchPersonItem/SearchPersonItem";
import SearchCompanyItem from "../../molecules/SearchCompanyItem/SearchCompanyItem";
import SearchKeywordItem from "../../molecules/SearchKeywordItem/SearchKeywordItem";

export default function SearchContent({
  movies,
  shows,
  people,
  companies,
  keywords,
  collections,
}) {
  const { type } = useParams();

  function getTitle(known_for) {
    if (known_for.length != 0 && known_for[0].name != undefined) {
      return known_for[0].name;
    } else if (known_for.length != 0 && known_for[0].title != undefined) {
      return known_for[0].title;
    }
    return "";
  }

  return (
    <>
      {type == "movie" && (
        <div className={styles.list}>
          {movies.length <= 0 && (
            <p>There are no movies that matched your query</p>
          )}
          {movies.length > 0 &&
            movies.map(({ id, poster_path, title, release_date }) => (
              <SearchMovieItem
                key={id}
                id={id}
                img={poster_path}
                title={title}
                release={release_date}
              />
            ))}
        </div>
      )}

      {type == "tv" && (
        <div className={styles.list}>
          {shows.length <= 0 && (
            <p>There are no shows that matched your query</p>
          )}
          {shows.length > 0 &&
            shows.map(({ id, poster_path, name, first_air_date }) => (
              <SearchMovieItem
                key={id}
                id={id}
                img={poster_path}
                title={name}
                release={first_air_date}
              />
            ))}
        </div>
      )}
      {type == "person" && (
        <div className={styles.list}>
          {people.length <= 0 && (
            <p>There are no people that matched your query</p>
          )}
          {people.length > 0 &&
            people.map(
              ({ id, name, known_for_department, known_for, profile_path }) => (
                <SearchPersonItem
                  key={id}
                  id={id}
                  img={profile_path}
                  name={name}
                  known_for={known_for_department}
                  movie={getTitle(known_for)}
                />
              )
            )}
        </div>
      )}
      {type == "company" && (
        <div className={styles.list}>
          {companies.length <= 0 && (
            <p>There are no companies that matched your query</p>
          )}
          {companies.length > 0 &&
            companies.map(({ id, name, logo_path, origin_country }) => (
              <SearchCompanyItem
                key={id}
                id={id}
                name={name}
                img={logo_path}
                country={origin_country}
              />
            ))}
        </div>
      )}

      {type == "keyword" && (
        <div className={styles.list}>
          {keywords.length <= 0 && (
            <p>There are no keywords that matched your query</p>
          )}
          {keywords.length > 0 &&
            keywords.map(({ id, name }) => (
              <SearchKeywordItem id={id} key={id} name={name} />
            ))}
        </div>
      )}

      {type == "collection" && (
        <div className={styles.list}>
          {collections.length <= 0 && (
            <p>There are no collections that matched your query</p>
          )}
          {collections.length > 0 &&
            collections.map(({ id, poster_path, name }) => (
              <SearchMovieItem
                key={id}
                id={id}
                img={poster_path}
                title={name}
                release={""}
              />
            ))}
        </div>
      )}
    </>
  );
}
