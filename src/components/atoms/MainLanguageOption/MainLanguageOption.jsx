import React from "react";

import PropTypes from "prop-types";

import styles from "./MainLanguageOption.module.scss";

function LanguageOption({ label, code, onClick }) {
  return (
    <p className={styles.label} onClick={onClick}>
      {label} {code && `${code}-${code.toUpperCase()}`}
      <svg className={styles.svg}>
        <use href={require(`@assets/svgs.svg`) + `#icon-arrow`}></use>
      </svg>
    </p>
  );
}

LanguageOption.propTypes = {
  label: PropTypes.string.isRequired,
  code: PropTypes.string,
};

export default LanguageOption;
