import React from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./SearchResult.module.scss";

export default function SearchResult({ label }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/search/movie?q=${label}`);
  }

  return (
    <div className={styles.item} onClick={handleClick}>
      <div className="container">
        <span className={styles.link}>{label}</span>
      </div>
    </div>
  );
}
