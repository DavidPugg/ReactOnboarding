import React from "react";
import classNames from "classnames";

import styles from "./MainButton.module.scss";

type Props = {
  label: string;
  updated: boolean;
  onClick: Function;
};

export default function SearchButton({ label, updated, onClick }: Props) {
  return (
    <button
      onClick={() => onClick()}
      className={classNames(styles.button, updated ? styles.updated : "")}
    >
      {label}
    </button>
  );
}
