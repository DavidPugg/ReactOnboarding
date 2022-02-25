import React, { useState } from "react";

import UniversalDropdown from "../../atoms/UniversalDropdown";

import styles from "./PlusMenuItem.module.scss";

export default function PlusMenuItem() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={styles.box}>
      <svg className={styles.svg} onClick={() => setDropdown(!dropdown)}>
        <use href={require(`@assets/svgs.svg`) + `#icon-plus`}></use>
      </svg>
      {dropdown && (
        <UniversalDropdown onClickOutside={() => setDropdown(false)}>
          <p className={styles.text}>Can't find a movie or TV show?</p>
          <p className={styles.text}>Login to create it.</p>
        </UniversalDropdown>
      )}
    </div>
  );
}
