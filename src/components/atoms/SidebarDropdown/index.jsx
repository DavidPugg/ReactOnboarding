import React from "react";

import styles from './SidebarDropdown.module.scss'

export default function SidebarDropdown({children}) {
    return (
        <div className={styles.dropdown}>
            {children}
        </div>
    )
}