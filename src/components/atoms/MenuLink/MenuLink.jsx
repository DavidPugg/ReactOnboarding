import React from "react";
import PropTypes from "prop-types";

import styles from "./MenuLink.module.scss";
function MenuLink({ label, url }) {
  return (
    <a className={styles.link} href={url}>
      {label}
    </a>
  );
}

MenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuLink;
