import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";

import PropTypes from "prop-types";

import styles from "./SearchSidebarItem.module.scss";

function SearchSidebarItem({ label, to, count }) {
  let location = useLocation();

  const { type } = useParams();

  return (
    <Link
      to={`/search/${to}${location.search}`}
      className={`${styles.label} ${type == `${to}` ? styles.selected : ""}`}
    >
      {label}
      <span className={styles.count}>{count || 0}</span>
    </Link>
  );
}

SearchSidebarItem.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number,
};

export default SearchSidebarItem;
