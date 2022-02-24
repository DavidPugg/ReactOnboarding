import React, { useState } from "react";

import styles from "./SidebarItem.module.scss";

import SidebarButton from "../../atoms/SidebarButton";
import SidebarDropdown from "../../atoms/SidebarDropdown";

export default function SidebarSort({ label, children }) {
  const [dropdown, setDropdown] = useState(false);

  function getStyle() {
    return dropdown
      ? { transform: `rotate(${90}deg)` }
      : { transform: `rotate(${0}deg)` };
  }

  return (
    <div className={styles.box}>
      <SidebarButton
        style={getStyle()}
        label={label}
        onClick={() => setDropdown(!dropdown)}
      />
      {dropdown && <SidebarDropdown>{children}</SidebarDropdown>}
    </div>
  );
}
