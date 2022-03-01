import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainMenuLink.module.scss";

type Props = {
  label: string;
  url: string;
  className?: string
};

function MainMenuLink({ label, url, ...rest }: Props) {
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
