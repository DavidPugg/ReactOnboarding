import React from "react";

import { Link, useNavigate } from "react-router-dom";

import c from "./SearchResult.module.scss";

export default function SearchResult({ label }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/search/movie?q=${label}`);
  }

  return (
    <div className={c.item} onClick={handleClick}>
      <div className="container">
        <span className={c.link}>{label}</span>
      </div>
    </div>
  );
}
