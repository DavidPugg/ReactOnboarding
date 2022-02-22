import React from "react";

import c from './MainLanguageOption.module.scss'

export default function LanguageOption({label, code}) {
    return <p className={c.label}>{label} ({code}-{code.toUpperCase()})</p>
}