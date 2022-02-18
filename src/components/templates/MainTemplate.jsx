import React from "react";

import classes from "../../css/modules/mainTemplate.module.scss";

function MainTemplate({ header, sidebar, content, footer }) {
  return (
    <div className={classes.wrapper}>
      <header>{header}</header>
      <div className="container">
        <main className={classes.main}>
          <div className={classes.sidebar}>{sidebar}</div>
          <div className={classes.content}>{content}</div>
        </main>
      </div>
      <footer className={classes.footer}>{footer}</footer>
    </div>
  );
}

export default MainTemplate;
