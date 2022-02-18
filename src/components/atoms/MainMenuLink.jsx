import React from "react";
import PropTypes from "prop-types";

import classes from "../../css/modules/menu.module.scss";
function MainMenuLink({ label, url, ...rest }) {
  return (
    <a className={classes.mainlink} href={url} {...rest}>
      {label}
    </a>
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
