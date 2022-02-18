import React, { useState } from "react";

import MainMenuItem from "../molecules/MainMenuItem";
import LanguageSwitcher from "../molecules/LanguageSwitcher";

import menus from "../mainMenuArray";
import languages from "../languages";

import classes from "../../css/modules/menu.module.scss";
import MainMenuLink from "../atoms/MainMenuLink";
import SearchToggle from "../atoms/SearchToggle";
import SearchBar from "../molecules/Searchbar";

export default function MainMenu() {
  const [currentLanguage, setCurrentLanguage] = useState({
    code: "en",
    label: "English",
  });
  const [fallbackLanguage, setFallbackLanguage] = useState({
    code: "de",
    label: "German",
  });
  const [searchbar, setSearchbar] = useState(false)
  return [
    <div className={classes.background}>
      <div className="container">
        <div className={classes.main}>
          <div className={classes.left}>
            <MainMenuLink className={classes.title} label="TMDB" />
            {menus.map(({ label, links }) => (
              <MainMenuItem key={label} label={label} links={links} />
            ))}
          </div>
          <div className={classes.right}>
            <LanguageSwitcher
              languages={languages}
              currentLanguage={currentLanguage}
              fallbackLanguage={fallbackLanguage}
              onLanguageChange={(code, label, type) => {
                if (type == "fallback") {
                  setFallbackLanguage({ code, label });
                } else {
                  setCurrentLanguage({ code, label });
                }
              }}
            />
            <MainMenuLink label="Login" />
            <SearchToggle onToggle={() => {setSearchbar(!searchbar)}}/>
          </div>
        </div>
      </div>
    </div>,
    searchbar && <SearchBar />,
  ];
}
