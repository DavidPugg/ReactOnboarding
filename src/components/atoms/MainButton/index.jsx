import React from "react";
import classNames from "classnames";

import styles from "./MainButton.module.scss";

export default function SearchButton({ label, updated, onClick }) {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, updated ? styles.updated : "")}
    >
      {label}
    </button>
  );
}
