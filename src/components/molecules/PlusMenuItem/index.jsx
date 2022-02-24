import React, { useRef, useState } from "react";

import UniversalDropdown from "../../atoms/UniversalDropdown";

import clickOutside from "../../hooks/clickOutside";

import styles from "./PlusMenuItem.module.scss";

export default function PlusMenuItem() {
  const [dropdown, setDropdown] = useState(false);

  function onToggle() {
    setDropdown(!dropdown);
  }

  const myRef = useRef("dropdown");
  clickOutside(myRef, () => {
    setDropdown(false);
  });

  return (
    <div className={styles.box} ref={myRef}>
      <svg className={styles.svg} onClick={() => onToggle()}>
        <use href={require(`@assets/svgs.svg`) + `#icon-plus`}></use>
      </svg>
      {dropdown && (
        <UniversalDropdown>
          <p className={styles.text}>Can't find a movie or TV show?</p>
          <p className={styles.text}>Login to create it.</p>
        </UniversalDropdown>
      )}
    </div>
  );
}
