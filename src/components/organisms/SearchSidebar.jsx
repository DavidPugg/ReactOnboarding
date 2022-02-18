import React from "react";

import classes from "../../css/modules/searchSidebar.module.scss";

import SearchSidebarItem from "../atoms/SearchSidebarItem";

const options = [
  {
    label: "Movies",
    results: "0",
  },
  {
    label: "TV Shows",
    results: "0",
  },
  {
    label: "People",
    results: "0",
  },
  {
    label: "Collections",
    results: "0",
  },
  {
    label: "Companies",
    results: "0",
  },
  {
    label: "Keywords",
    results: "0",
  },
  {
    label: "Networks",
    results: "0",
  },
];

export default function SearchSidebar() {
  return (
    <div className={classes.main}>
      <p className={classes.title}>Search Results</p>
      <div className={classes.itemcontainer}>
        {options.map(({ label, results }) => (
          <SearchSidebarItem key={label} label={label} results={results} />
        ))}
      </div>
    </div>
  );
}
