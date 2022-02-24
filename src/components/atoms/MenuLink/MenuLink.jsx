import React from "react";
import {Link} from 'react-router-dom'

import PropTypes from "prop-types";

import styles from "./MenuLink.module.scss";
function MenuLink({ label, url }) {
  return (
    <Link className={styles.link} to={url}>
      {label}
    </Link>
  );
}

MenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuLink;
