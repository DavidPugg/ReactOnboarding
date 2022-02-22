import React from "react";
import PropTypes from "prop-types";

import c from "./MenuLink.module.scss";
function MenuLink({ label, url }) {
  return (
    <a className={c.link} href={url}>
      {label}
    </a>
  );
}

MenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuLink;
