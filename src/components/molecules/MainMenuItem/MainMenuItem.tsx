import { MenuLinkType } from "interfaces/Main";
import React, { useState } from "react";
import MainMenuLink from "../../atoms/MainMenuLink/MainMenuLink";
import LinkMenu from "../LinkMenu/LinkMenu";
import styles from "./MainMenuItem.module.scss";

type Props = {
  url?: string;
  label: string;
  links: Array<MenuLinkType>;
};

export default function MainMenuItem({ url, label, links }: Props) {
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
