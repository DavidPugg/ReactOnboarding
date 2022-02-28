import classNames from "classnames";
import React from "react";
import styles from "./GenreButton.module.scss";

type Props = {
  label: string;
  onClick: Function;
  isActive: boolean;
};

export default function GenreButton({ label, onClick, isActive }: Props) {
  return (
    <p
      onClick={() => onClick()}
      className={classNames(styles.genre, isActive ? styles.selected : "")}
    >
      {label}
    </p>
  );
}
