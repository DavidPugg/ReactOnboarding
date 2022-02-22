import React from "react";

import c from './HomeTemplate.module.scss'

function MainTemplate({ header, content, footer }) {
  return (
    <div className={c.wrapper}>
      <header>{header}</header>
      <div className={c.content}>{content}</div>
      <footer className={c.footer}>{footer}</footer>
    </div>
  );
}

export default MainTemplate;
