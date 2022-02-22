import React from "react";

import c from "./SearchNetworkItem.module.scss";

export default function SearchPersonItem({ name, known_for, movie }) {
  return (
    <div className={c.item}>
      <h3 className={c.name}>{name}</h3>
      <p>
        {known_for} • {movie}
      </p>
    </div>
  );
}
