import React from "react";
import PropTypes from "prop-types";

import classes from "../../css/modules/menu.module.scss";
function MenuLink({ label, url }) {
  return (
    <a className={classes.link} href={url}>
      {label}
    </a>
  );
}

MenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuLink;
