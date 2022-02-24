import React from "react";

import PopularSort from "../PopularSort";
import PopularFilter from "../PopularFIlter";

import styles from "./PopularSidebar.module.scss";

export default function PopularSidebar() {
  return (
    <div className={styles.sidebar}>
      <PopularSort />
      <PopularFilter />
    </div>
  );
}
