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
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
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
