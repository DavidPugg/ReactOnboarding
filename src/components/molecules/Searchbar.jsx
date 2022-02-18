import React from "react";

import SearchInput from "../atoms/SearchInput";

import classes from "../../css/modules/search.module.scss";

export default function Searchbar() {
  return (
    <div className={classes.searchbar}>
      <div className="container">
        <SearchInput />
      </div>
    </div>
  );
}
