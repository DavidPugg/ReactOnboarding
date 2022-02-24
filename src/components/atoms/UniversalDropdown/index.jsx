import React from "react";

import styles from './UniversalDropdown.module.scss'

export default function UniversalDropdown({children, style}){
    return (
        <div style={style} className={styles.dropdown}>{children}</div>
    )
}