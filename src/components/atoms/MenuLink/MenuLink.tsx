import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuLink.module.scss";

type Props = {
  label: string;
  url: string;
};

function MenuLink({ label, url }: Props) {
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
