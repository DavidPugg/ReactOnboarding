import React, { useState } from "react";
import LinkMenu from "./LinkMenu";
import MainMenuLink from "../atoms/MainMenuLink";

import classes from "../../css/modules/menu.module.scss";

export default function MainMenuItem({ url, label, links }) {
  const [showMenu, setMenu] = useState(false);
  return (
    <div
      className={classes.mainitem}
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
    >
      <MainMenuLink url={url} label={label} />
      {showMenu && <LinkMenu links={links} />}
    </div>
  );
}
