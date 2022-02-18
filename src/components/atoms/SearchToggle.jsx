import React from "react";

import classes from "../../css/modules/search.module.scss";

export default function SearchToggle({ onToggle }) {
  return (
    <p className={classes.toggle} onClick={() => onToggle()}>
      Search
    </p>
  );
}
