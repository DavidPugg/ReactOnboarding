import React from "react";

import classes from "../../css/modules/language.module.scss";

export default function LanguageOption({label, code}) {
    return <p className={classes.mainoption}>{label} ({code}-{code.toUpperCase()})</p>
}