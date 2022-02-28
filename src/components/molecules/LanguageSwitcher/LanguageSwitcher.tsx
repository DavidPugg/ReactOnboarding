import React, { useState } from "react";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import languages from "./languages";
import styles from "./LanguageSwitcher.module.scss";

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState({
    code: "en",
    label: "English",
  });
  const [fallbackLanguage, setFallbackLanguage] = useState({
    code: "de",
    label: "German",
  });

  function onLanguageChange(code: string, label: string, type: string) {
    if (type == "fallback") {
      setFallbackLanguage({ code, label });
    } else {
      setCurrentLanguage({ code, label });
    }
  }

  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={styles.box}>
      <p onClick={() => setDropdown(!dropdown)} className={styles.toggle}>
        {currentLanguage.code}
      </p>
      {dropdown && (
        <LanguageDropdown
          onClickOutside={() => {
            setDropdown(false);
          }}
          onLanguageChange={onLanguageChange}
          languages={languages}
          currentLanguage={currentLanguage}
          fallbackLanguage={fallbackLanguage}
        />
      )}
    </div>
  );
}
