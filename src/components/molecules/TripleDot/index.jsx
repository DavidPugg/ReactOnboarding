import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import clickOutside from "../../hooks/clickOutside";
import UniversalDropdown from "@components/atoms/UniversalDropdown";

import styles from "./TripleDot.module.scss";

export default function TripleDot() {
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
        <use href={require(`@assets/svgs.svg`) + `#icon-dots`}></use>
      </svg>
      {dropdown && (
        <UniversalDropdown
          style={{ "paddingLeft": "0", "paddingRight": "0" }}
        >
          <p className={styles.text}>
            Want to rate or add this iten to a list?
          </p>
          <Link className={styles.link} to="#">
            Login
            <svg className={styles.arrow}>
              <use href={require(`@assets/svgs.svg`) + `#icon-arrow`}></use>
            </svg>
          </Link>
          <p className={styles.text}>Not a Member?</p>
          <Link className={styles.link} to="#">
            Sign up and join the community
            <svg className={styles.arrow}>
              <use href={require(`@assets/svgs.svg`) + `#icon-arrow`}></use>
            </svg>
          </Link>
        </UniversalDropdown>
      )}
    </div>
  );
}
