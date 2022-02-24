import React, { useContext } from "react";
import classNames from "classnames";

import styles from "./GenreButton.module.scss";

export default function GenreButton({ label, onClick, isActive }) {

  return (
    <p
      onClick={onClick}
      className={classNames(styles.genre, isActive ? styles.selected : "")}
    >
      {label}
    </p>
  );
}
