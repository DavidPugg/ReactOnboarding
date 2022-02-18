import React from "react";

import classes from "../../css/modules/mainTemplate.module.scss";

function MainTemplate({ header, content, footer }) {
  return (
    <div className={classes.wrapper}>
      <header>{header}</header>
      <div className={classes.content}>{content}</div>
      <footer className={classes.footer}>{footer}</footer>
    </div>
  );
}

export default MainTemplate;
