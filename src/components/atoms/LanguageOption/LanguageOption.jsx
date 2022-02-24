import React from "react";

import PropTypes from "prop-types";

import styles from "./LanguageOption.module.scss";
function LanguageOption({ label, code, onClick }) {
  return (
    <p className={styles.option} onClick={onClick}>
      {label} {code && `${code}-${code.toUpperCase()}`}
    </p>
  );
}

LanguageOption.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default LanguageOption;
