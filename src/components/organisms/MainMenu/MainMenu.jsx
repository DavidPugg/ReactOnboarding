import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import MainMenuItem from "../../molecules/MainMenuItem/MainMenuItem";
import LanguageSwitcher from "../../molecules/LanguageSwitcher/LanguageSwitcher";
import MainMenuLink from "../../atoms/MainMenuLink/MainMenuLink";
import SearchToggle from "../../atoms/SearchToggle/SearchToggle";
import SearchBar from "../../molecules/SearchBar/Searchbar";
import PlusMenuItem from "../../molecules/PlusMenuItem";

import menus from "./mainMenuArray";

import styles from "./MainMenu.module.scss";
export default function MainMenu() {
  const [searchbar, setSearchbar] = useState(false);
  const { search } = useLocation();

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code != "KeyS") return;
      setTimeout(() => {
        setSearchbar(true);
      }, 10);
    });
    return () =>
      document.removeEventListener("keydown", (e) => {
        if (e.code != "KeyS") return;
        setTimeout(() => {
          setSearchbar(true);
        }, 10);
      });
  });

  useEffect(() => {
    setSearchbar(false);
    return () => setSearchbar(true);
  }, [search]);

  return (
    <>
      <div className={styles.background}>
        <div className="container">
          <div className={styles.main}>
            <div className={styles.left}>
              <MainMenuLink className={styles.title} url="/" label="TMDB" />
              {menus.map(({ label, links }) => (
                <MainMenuItem key={label} label={label} links={links} />
              ))}
            </div>
            <div className={styles.right}>
              <PlusMenuItem/>
              <LanguageSwitcher />
              <MainMenuLink label="Login" />
              <SearchToggle
                onToggle={() => {
                  setSearchbar(!searchbar);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {searchbar && <SearchBar />}
    </>
  );
}
