import React from "react";
import PropTypes from "prop-types";

import { Link} from 'react-router-dom'

import styles from './MainMenuLink.module.scss'
function MainMenuLink({ label, url, ...rest }) {
  return (
    <Link className={styles.link} to={url} {...rest}>
      {label}
    </Link>
  );
}

MainMenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
};

MainMenuLink.defaultProps = {
  url: "#",
};

export default MainMenuLink;
