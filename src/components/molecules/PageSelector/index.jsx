import React, { useEffect, useState } from "react";

import styles from "./PageSelector.module.scss";

import PageSelectorButton from "../../atoms/PageSelectorButton";
import { useSelector } from "react-redux";

function PageSelector({ totalPages, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const prevFilters = useSelector((state) => state.filters.prev)
  const prevSort = useSelector((state) => state.sort.prev)

  useEffect(() => {setCurrentPage(1)}, [prevFilters, prevSort])

  function HandleClick(page) {
    setCurrentPage(page);
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
