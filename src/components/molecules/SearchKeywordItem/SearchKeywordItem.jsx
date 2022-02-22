import React from "react";

import c from "./SearchKeywordItem.module.scss";

export default function SearchPersonItem({ name }) {
  return (
    <div className={c.item}>
      <p className={c.name}>{name}</p>
    </div>
  );
}
