import React from "react";

import PropTypes from "prop-types";

import classes from "../../css/modules/searchSidebar.module.scss";

function SearchSidebarItem({ label, results }) {
  return (
    <p className={classes.label}>
      {label}
      <span className={classes.results}>{results}</span>
    </p>
  );
}

SearchSidebarItem.propTypes = {
  label: PropTypes.string.isRequired,
  results: PropTypes.number,
};

SearchSidebarItem.defaultProps = {
  results: 0,
};

export default SearchSidebarItem;
