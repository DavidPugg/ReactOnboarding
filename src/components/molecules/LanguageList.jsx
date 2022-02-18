import React from "react";

import LanguageOption from "../atoms/LanguageOption";

import classes from "../../css/modules/language.module.scss";

export default function LanguageList({ languages, onLanguageChange, type }) {
  return (
    <ul className={classes.list}>
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
