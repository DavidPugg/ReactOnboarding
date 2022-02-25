import React, { useRef } from "react";

import clickOutside from "../../hooks/clickOutside";

import styles from "./UniversalDropdown.module.scss";

export default function UniversalDropdown({
  children,
  style,
  ref,
  onClickOutside,
}) {
  const myRef = useRef(ref);
  clickOutside(myRef, () => {
    setTimeout(() => {
      onClickOutside();
    }, 150);
  });

  return (
    <div ref={myRef} style={style} className={styles.dropdown}>
      {children}
    </div>
  );
}
