import React, { useRef, useState } from "react";

import LanguageDropdown from "./LanguageDropdown";

import classes from "../../css/modules/language.module.scss";

import clickOutside from "../hooks/clickOutside";

export default function LanguageSwitcher({
  languages,
  onLanguageChange,
  currentLanguage,
  fallbackLanguage,
}) {
  const [dropdown, setDropdown] = useState(false);
  const wrapperRef = useRef('menu');
  clickOutside(wrapperRef, () => {
    setDropdown(false)
  })
  return (
    <div ref={wrapperRef}>
      <p onClick={() => setDropdown(!dropdown)} className={classes.toggle}>
        EN
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
