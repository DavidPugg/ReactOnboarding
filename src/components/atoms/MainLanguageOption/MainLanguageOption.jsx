import React from "react";

import styles from './MainLanguageOption.module.scss'

export default function LanguageOption({label, code}) {
    return <p className={styles.label}>{label} ({code}-{code.toUpperCase()})</p>
}