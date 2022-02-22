import React from "react";
import c from "./FooterLink.module.scss";

export default function FooterLink({ label, url }) {
  return (
    <a className={c.link} href={url}>
      {label}
    </a>
  );
}
