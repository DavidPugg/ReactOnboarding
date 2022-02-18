import React from "react";
import MenuLink from "../atoms/MenuLink";

import classes from "../../css/modules/menu.module.scss";

export default function LinkMenu({ links }) {
  return (
    <ul className={classes.list}>
      {links.map(({ url, label }) => (
        <li className={classes.link} key={url}>
          <MenuLink url={url} label={label} />
        </li>
      ))}
    </ul>
  );
}
