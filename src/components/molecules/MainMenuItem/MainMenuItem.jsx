import React, { useState } from "react";
import LinkMenu from "../LinkMenu/LinkMenu";
import MainMenuLink from "../../atoms/MainMenuLink/MainMenuLink";

import styles from './MainMenuItem.module.scss'

export default function MainMenuItem({ url, label, links }) {
  const [showMenu, setMenu] = useState(false);
  return (
    <div
      className={styles.item}
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
    >
      <MainMenuLink url={url} label={label} />
      {showMenu && <LinkMenu links={links} />}
    </div>
  );
}
