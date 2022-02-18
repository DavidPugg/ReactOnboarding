import React from "react";

import classes from "../../css/modules/language.module.scss";
export default function LanguageOption({label, code}) {
    return <p className={classes.option}>{label} ({code}-{code.toUpperCase()})</p>
}