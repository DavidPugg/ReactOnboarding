import React from "react";

import PropTypes from "prop-types";

import styles from "./LanguageOption.module.scss";

type Props = {
  label: string;
  code?: string;
  onClick: Function;
};

function LanguageOption({ label, code, onClick }: Props) {
  return (
    <p className={styles.option} onClick={() => onClick()}>
      {label} {code && `${code}-${code.toUpperCase()}`}
    </p>
  );
}

LanguageOption.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default LanguageOption;
