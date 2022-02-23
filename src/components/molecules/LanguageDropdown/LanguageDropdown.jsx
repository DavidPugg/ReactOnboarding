import React, { useState } from "react";

import MainLanguageOption from "../../atoms/MainLanguageOption/MainLanguageOption";
import LanguageList from "../LanguageList/LanguageList";

import styles from "./LanguageDropdown.module.scss";

export default function LanguageDropdown({
  languages,
  currentLanguage,
  fallbackLanguage,
  onLanguageChange,
}) {
  const [currentDropdown, setCurrentDropdown] = useState(false);
  const [fallbackDropdown, setFallbackDropdown] = useState(false);
  return (
    <div className={styles.dropdown}>
      <p className={styles.title}>Language preferences</p>
      <div className={styles.selection}>
        <p>Default language</p>
        <span onClick={() => setCurrentDropdown(!currentDropdown)}>
          <MainLanguageOption
            label={currentLanguage.label}
            code={currentLanguage.code}
          />
        </span>
        {currentDropdown && (
          <LanguageList
            languages={languages.filter((e) => e.code != currentLanguage.code)}
            onLanguageChange={onLanguageChange}
            type="current"
          />
        )}
      </div>

      <div className={styles.selection}>
        <p>Fallback language</p>
        <span onClick={() => setFallbackDropdown(!fallbackDropdown)}>
          <MainLanguageOption
            label={fallbackLanguage.label}
            code={fallbackLanguage.code}
          />
        </span>
        {fallbackDropdown && (
          <LanguageList
            languages={languages.filter((e) => e.code != fallbackLanguage.code)}
            onLanguageChange={onLanguageChange}
            type="fallback"
          />
        )}
      </div>
    </div>
  );
}
