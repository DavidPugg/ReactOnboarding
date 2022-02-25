import React from "react";
import classNames from "classnames";

import styles from "./PageSelectorButton.module.scss";

function PageSelectorButton({ page, onClick, isSelected }) {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.button, isSelected ? styles.selected : "")}
    >
      {page}
    </div>
  );
}

export default PageSelectorButton;
