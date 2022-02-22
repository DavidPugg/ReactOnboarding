import React from "react";

import c from "./Footer.module.scss";

import FooterColumn from "../../molecules/FooterColumn/FooterColumn";

const columns = [
  {
    label: "THE BASICS",
    links: [
      {
        label: "About TMDB",
        url: "#",
      },
      {
        label: "Contact Us",
        url: "#",
      },
      {
        label: "Support Forums",
        url: "#",
      },
      {
        label: "API",
        url: "#",
      },
      {
        label: "System Status",
        url: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className={c.background}>
      <div className="container">
        <div className={c.content}>
          {columns.map(({ label, links }) => (
            <FooterColumn key={label} label={label} links={links} />
          ))}
        </div>
      </div>
    </div>
  );
}
