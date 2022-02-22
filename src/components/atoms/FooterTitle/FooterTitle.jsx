import React from "react";

import c from './FooterTitle.module.scss'

export default function FooterTitle({ label }) {
  return <h4 className={c.title}>{label}</h4>;
}
