import PropTypes from "prop-types";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./SearchSidebarItem.module.scss";

type Props = {
  label: string;
  to: string;
  count: number;
};

function SearchSidebarItem({ label, to, count }: Props) {
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
