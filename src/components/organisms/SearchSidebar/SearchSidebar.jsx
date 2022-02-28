import React from "react";
import SearchSidebarItem from "../../atoms/SearchSidebarItem/SearchSidebarItem";
import options from "./options";
import styles from "./SearchSidebar.module.scss";




export default function SearchSidebar({
  movies,
  shows,
  people,
  companies,
  keywords,
  collections,
}) {
  function getCount(to) {
    switch(to) {
      case 'movie': return movies;
      case 'tv': return shows;
      case 'person': return people;
      case 'company': return companies;
      case 'keyword': return keywords;
      case 'collection': return collections;
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
