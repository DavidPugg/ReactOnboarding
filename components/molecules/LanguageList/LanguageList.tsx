import { Language, Type } from 'interfaces/Language';
import React from 'react';
import LanguageOption from '../../atoms/LanguageOption/LanguageOption';
import styles from './LanguageList.module.scss';

interface Props {
    languages: Array<Language>;
    onLanguageChange: ({ code, label }: Language, type: Type) => void;
    type: Type;
}

const LanguageList = ({ languages, onLanguageChange, type }: Props) => {
    return (
        <ul className={styles.list}>
            {languages.map(({ label, code }) => (
                <li key={code}>
                    <LanguageOption
                        label={label}
                        code={code}
                        onClick={() => {
                            onLanguageChange({ code, label }, type);
                        }}
                    />
                </li>
            ))}
        </ul>
    );
}
export default LanguageList;