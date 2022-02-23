import React from "react";

import styles from './LanguageOption.module.scss'
export default function LanguageOption({label, code}) {
    return <p className={styles.option}>{label} ({code}-{code.toUpperCase()})</p>
}