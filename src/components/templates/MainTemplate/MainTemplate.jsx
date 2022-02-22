import React from "react";

import c from './MainTemplate.module.scss'

function MainTemplate({ header, sidebar, content, footer }) {
  return (
    <div className={c.wrapper}>
      <header>{header}</header>
      <div className="container">
        <main className={c.main}>
          <div className={c.sidebar}>{sidebar}</div>
          <div className={c.content}>{content}</div>
        </main>
      </div>
      <footer className={c.footer}>{footer}</footer>
    </div>
  );
}

export default MainTemplate;
