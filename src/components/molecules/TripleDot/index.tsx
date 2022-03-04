import UniversalDropdown from "../..//atoms/UniversalDropdown";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TripleDot.module.scss";


export default function TripleDot() {
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <div className={styles.box}>
      <svg className={styles.svg} onClick={() => setDropdown(!dropdown)}>
        <use href={require(`@assets/svgs.svg`) + `#icon-dots`}></use>
      </svg>
      {dropdown && (
        <UniversalDropdown
          onClickOutside={() => setDropdown(false)}
          style={{ paddingLeft: "0", paddingRight: "0" }}
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
