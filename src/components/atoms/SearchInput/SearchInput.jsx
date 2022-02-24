import React, { useEffect, useRef } from "react";

import styles from "./SearchInput.module.scss";

export default function SearchInput({ onSubmit, onInput }) {
  const inputEl = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputEl.current.value);
  }

  return (
    <div className={styles.border}>
      <div className="container">
        <form className={styles.box}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <svg className={styles.svg} onClick={() => onToggle()}>
            <use
              href={require(`@assets/svgs.svg`) + `#icon-magnifying-glass`}
            ></use>
          </svg>
          <input
            ref={inputEl}
            onInput={() => {
              onInput(inputEl.current.value);
            }}
            autoFocus
            className={styles.input}
            type="text"
          />
        </form>
      </div>
    </div>
  );
}
