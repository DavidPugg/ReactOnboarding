import React from "react";

import c from './LanguageOption.module.scss'
export default function LanguageOption({label, code}) {
    return <p className={c.option}>{label} ({code}-{code.toUpperCase()})</p>
}