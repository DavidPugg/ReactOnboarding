import React from "react";

import classes from '../../css/modules/footer.module.scss'

export default function FooterTitle({ label }) {
  return <h4 className={classes.title}>{label}</h4>;
}
