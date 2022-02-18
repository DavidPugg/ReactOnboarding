import React from "react";

import classes from "../../css/modules/footer.module.scss";

import FooterTitle from "../atoms/FooterTitle";
import FooterLink from "../atoms/FooterLink";

export default function FooterColumn({ label, links }) {
  return (
    <div className={classes.column}>
      <FooterTitle label={label} />
      {links.map(({ label, url }) => (
        <FooterLink key={label} label={label} url={url} />
      ))}
    </div>
  );
}
