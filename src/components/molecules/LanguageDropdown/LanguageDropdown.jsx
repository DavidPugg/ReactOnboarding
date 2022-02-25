import React, { useState } from "react";

import MainLanguageOption from "../../atoms/MainLanguageOption/MainLanguageOption";
import LanguageList from "../LanguageList/LanguageList";
import UniversalDropdown from "../../atoms/UniversalDropdown";
import LanguageSearch from "../../atoms/LanguageSearch";

import styles from "./LanguageDropdown.module.scss";

export default function LanguageDropdown({
  languages,
  currentLanguage,
  fallbackLanguage,
  onLanguageChange,
  onClickOutside,
}) {
  const [currentDropdown, setCurrentDropdown] = useState(false);
  const [fallbackDropdown, setFallbackDropdown] = useState(false);
  const [filteredLanguages, setFilteredLanguages] = useState(languages);

  function handleInput(value) {
    if (value == "" || value == undefined) {
      setFilteredLanguages(languages);
    } else {
      const lang = languages.filter((e) => {
        const inLabel = e.label.toLowerCase().includes(value.toLowerCase());
        const inCode = e.code.toLowerCase().includes(value.toLowerCase());
        if (inCode || inLabel) return true;
      });

      setFilteredLanguages(lang);
    }
  }

  function handleLanguageChange() {
    setCurrentDropdown(false);
    setFallbackDropdown(false);
  }

  return (
    <UniversalDropdown onClickOutside={onClickOutside}>
      <p className={styles.title}>Language preferences</p>
      <div className={styles.selection}>
        <p className={styles.text}>Default language</p>
        <MainLanguageOption
          onClick={() => setCurrentDropdown(!currentDropdown)}
          label={currentLanguage.label}
          code={currentLanguage.code}
        />
        {currentDropdown && (
          <UniversalDropdown
            onClickOutside={() => {
              setCurrentDropdown(false);
              setFilteredLanguages(languages);
            }}
            style={{ paddingRight: "0", paddingLeft: "0" }}
          >
            <LanguageSearch onInput={handleInput} />
            <LanguageList
              languages={filteredLanguages.filter(
                (e) => e.code != currentLanguage.code
              )}
              onLanguageChange={(code, label, type) => {
                onLanguageChange(code, label, type);
                handleLanguageChange();
              }}
              type="current"
            />
          </UniversalDropdown>
        )}
      </div>

      <div className={styles.selection}>
        <p className={styles.text}>Fallback language</p>
        <MainLanguageOption
          onClick={() => {
            setFallbackDropdown(!fallbackDropdown);
            setFilteredLanguages(languages);
          }}
          label={fallbackLanguage.label}
          code={fallbackLanguage.code}
        />
        {fallbackDropdown && (
          <UniversalDropdown
            onClickOutside={() => setFallbackDropdown(false)}
            style={{ paddingRight: "0", paddingLeft: "0" }}
          >
            <LanguageSearch onInput={handleInput} />
            <LanguageList
              languages={filteredLanguages.filter(
                (e) => e.code != fallbackLanguage.code
              )}
              onLanguageChange={(code, label, type) => {
                onLanguageChange(code, label, type);
                handleLanguageChange();
              }}
              type="fallback"
            />
          </UniversalDropdown>
        )}
      </div>
    </UniversalDropdown>
  );
}
