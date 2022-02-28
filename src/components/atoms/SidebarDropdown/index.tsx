import React from "react";
import styles from "./SidebarDropdown.module.scss";

type Props = {
  children: JSX.Element|JSX.Element[];
};

export default function SidebarDropdown({ children }: Props) {
  return <div className={styles.dropdown}>{children}</div>;
}
