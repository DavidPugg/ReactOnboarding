import React from "react";
import MenuLink from "../../atoms/MenuLink/MenuLink";
import c from "./LinkMenu.module.scss";

type Props = {
  links: Array<{
    url: string;
    label: string;
  }>;
};

export default function LinkMenu({ links }: Props) {
  return (
    <ul className={c.list}>
      {links.map(({ url, label }) => (
        <li className={c.link} key={label}>
          <MenuLink url={url} label={label} />
        </li>
      ))}
    </ul>
  );
}
