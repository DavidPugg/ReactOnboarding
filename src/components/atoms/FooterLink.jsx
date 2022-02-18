import React from "react";
import classes from "../../css/modules/footer.module.scss";

export default function FooterLink({ label, url }) {
  return (
    <a className={classes.link} href={url}>
      {label}
    </a>
  );
}
