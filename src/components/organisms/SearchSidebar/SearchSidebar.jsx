import React from "react";

import styles from "./SearchSidebar.module.scss";

import SearchSidebarItem from "../../atoms/SearchSidebarItem/SearchSidebarItem";

import options from "./options";

export default function SearchSidebar({
  movies,
  shows,
  people,
  companies,
  keywords,
  collections,
  networks,
}) {
  function getCount(to) {
    if (to == "movie") {
      return movies;
    } else if (to == "tv") {
      return shows;
    } else if (to == "person") {
      return people;
    } else if (to == "company") {
      return companies;
    } else if (to == "keyword") {
      return keywords;
    } else if (to == "collection") {
      return collections;
    } else if (to == "network") {
      return networks;
    }
  }

  return (
    <div className={styles.main}>
      <p className={styles.title}>Search Results</p>
      <div className={styles.container}>
        {options.map(({ label, to }) => (
          <SearchSidebarItem
            key={label}
            label={label}
            to={to}
            count={getCount(to)}
          />
        ))}
      </div>
    </div>
  );
}
