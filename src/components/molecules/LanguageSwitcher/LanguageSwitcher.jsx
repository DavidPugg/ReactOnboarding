import React, { useRef, useState } from "react";

import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

import c from "./LanguageSwitcher.module.scss";

import clickOutside from "../../hooks/clickOutside";

import languages from "./languages";

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState({
    code: "en",
    label: "English",
  });
  const [fallbackLanguage, setFallbackLanguage] = useState({
    code: "de",
    label: "German",
  });

  function onLanguageChange(code, label, type) {
    if (type == "fallback") {
      setFallbackLanguage({ code, label });
    } else {
      setCurrentLanguage({ code, label });
    }
  }

  const [dropdown, setDropdown] = useState(false);

  const wrapperRef = useRef("menu");
  clickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  return (
    <div ref={wrapperRef}>
      <p onClick={() => setDropdown(!dropdown)} className={c.toggle}>
        {currentLanguage.code}
      </p>
      {dropdown && (
        <LanguageDropdown
          onLanguageChange={onLanguageChange}
          languages={languages}
          currentLanguage={currentLanguage}
          fallbackLanguage={fallbackLanguage}
        />
      )}
    </div>
  );
}
