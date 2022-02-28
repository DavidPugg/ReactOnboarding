import PropTypes from "prop-types";
import React from "react";
import styles from "./MainLanguageOption.module.scss";

type Props = {
  label: string;
  code: string;
  onClick: Function;
};

function LanguageOption({ label, code, onClick }: Props) {
  return (
    <p className={styles.label} onClick={() => onClick()}>
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
