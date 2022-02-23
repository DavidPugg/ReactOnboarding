import React from "react";

import LanguageOption from "../../atoms/LanguageOption/LanguageOption";

import styles from './LanguageList.module.scss'

export default function LanguageList({ languages, onLanguageChange, type }) {
  return (
    <ul className={styles.list}>
      {languages.map(({label, code}) => (
      <li
      key={code}
        onClick={() => {
          onLanguageChange(code, label, type);
        }}
      >
        <LanguageOption label={label} code={code} />
      </li>
      ))}
    </ul>
  );
}
