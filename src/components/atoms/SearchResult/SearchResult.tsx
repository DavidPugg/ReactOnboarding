import { useRouter } from "next/router";
import React from "react";
import styles from "./SearchResult.module.scss";

type Props = {
  label: string
}

export default function SearchResult({ label }: Props) {
  const router = useRouter();

  function handleClick() {
    router.push(`/search/movie?q=${label}`);
  }

  return (
    <div className={styles.item} onClick={handleClick}>
      <div className="container">
        <span className={styles.link}>{label}</span>
      </div>
    </div>
  );
}
