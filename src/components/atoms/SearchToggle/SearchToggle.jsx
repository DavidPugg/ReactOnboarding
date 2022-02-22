import React from "react";

import c from "./SearchToggle.module.scss";

export default function SearchToggle({ onToggle }) {
  return (
    <p className={c.toggle} onClick={() => onToggle()}>
      Search
    </p>
  );
}
