import React from "react";
import LanguageOption from "../../atoms/LanguageOption/LanguageOption";
import styles from "./LanguageList.module.scss";

type Props = {
  languages: Array<{
    label: string;
    code: string;
  }>;
  onLanguageChange: Function;
  type: string;
};

export default function LanguageList({
  languages,
  onLanguageChange,
  type,
}: Props) {
  return (
    <ul className={styles.list}>
      {languages.map(({ label, code }) => (
        <li key={code}>
          <LanguageOption
            label={label}
            code={code}
            onClick={() => {
              onLanguageChange(code, label, type);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
