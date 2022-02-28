import React from "react";

import styles from "./PageSelector.module.scss";

import PageSelectorButton from "../../atoms/PageSelectorButton";

function PageSelector({ totalPages, onPageChange, currentPage }) {

  function HandleClick(page) {
    onPageChange(page);
  }

  return (
    <div className={styles.box}>
      {currentPage - 2 > 0 && (
        <PageSelectorButton
          onClick={() => HandleClick(currentPage - 2)}
          page={currentPage - 2}
        />
      )}
      {currentPage - 1 > 0 && (
        <PageSelectorButton
          onClick={() => HandleClick(currentPage - 1)}
          page={currentPage - 1}
        />
      )}
      <PageSelectorButton page={currentPage} isSelected />
      {currentPage + 1 <= totalPages && (
        <PageSelectorButton
          onClick={() => HandleClick(currentPage + 1)}
          page={currentPage + 1}
        />
      )}
      {currentPage + 2 <= totalPages && (
        <PageSelectorButton
          onClick={() => HandleClick(currentPage + 2)}
          page={currentPage + 2}
        />
      )}
    </div>
  );
}

export default PageSelector;
