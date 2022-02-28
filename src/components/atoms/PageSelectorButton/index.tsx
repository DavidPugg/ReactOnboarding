import classNames from "classnames";
import React from "react";
import styles from "./PageSelectorButton.module.scss";

type Props = {
  page: number;
  onClick?: Function;
  isSelected?: boolean;
};

function PageSelectorButton({ page, onClick, isSelected }: Props) {
  function handleClick() {
    onClick != undefined ? onClick() : "";
  }

  return (
    <div
      onClick={() => handleClick()}
      className={classNames(styles.button, isSelected ? styles.selected : "")}
    >
      {page}
    </div>
  );
}

export default PageSelectorButton;
