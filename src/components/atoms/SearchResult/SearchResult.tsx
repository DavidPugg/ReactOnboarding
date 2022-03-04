import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchResult.module.scss";

type Props = {
  label: string
}

export default function SearchResult({ label }: Props) {
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
