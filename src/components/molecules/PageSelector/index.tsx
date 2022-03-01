import React from "react";
import PageSelectorButton from "../../atoms/PageSelectorButton";
import styles from "./PageSelector.module.scss";

type Props = {
  totalPages: number|any,
  onPageChange: Function,
  currentPage: number
}

function PageSelector({ totalPages, onPageChange, currentPage }: Props) {

  function HandleClick(page: number) {
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
