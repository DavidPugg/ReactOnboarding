import { Language, Type } from 'interfaces/Language';
import React, { useState, memo, useRef, MutableRefObject } from 'react';
import LanguageSearch from '../../atoms/LanguageSearch';
import MainLanguageOption from '../../atoms/MainLanguageOption/MainLanguageOption';
import UniversalDropdown from '../../atoms/UniversalDropdown';
import LanguageList from '../LanguageList/LanguageList';
import styles from './LanguageDropdown.module.scss';

interface Props {
    type: string;
    title: string;
    languages: Array<Language>;
    currentLanguage: Language;
    onLanguageChange: ({ code, label }: Language, type: Type) => void;
}

const LanguageDropdown = ({ type, title, languages, currentLanguage, onLanguageChange }: Props) => {
    const [currentDropdown, setCurrentDropdown] = useState(false);
    const [filteredLanguages, setFilteredLanguages] = useState(languages);
    const myRef = useRef<HTMLSpanElement>();

    const handleInput = (value: string) => {
        if (value == '' || value == undefined) {
            setFilteredLanguages(languages);
        } else {
            const lang = languages.filter(({ label, code }) => {
                const inLabel = label.toLowerCase().includes(value.toLowerCase());
                const inCode = code.toLowerCase().includes(value.toLowerCase());
                if (inCode || inLabel) return true;
            });

            setFilteredLanguages(lang);
        }
    };

    const handleClickOutside = () => {
        setCurrentDropdown(false);
    };

    return (
        <>
            <div className={styles.selection}>
                <p className={styles.text}>{title}</p>
                <span ref={myRef as MutableRefObject<HTMLSpanElement>}>
                    <MainLanguageOption
                        onClick={() => setCurrentDropdown(true)}
                        label={currentLanguage.label}
                        code={currentLanguage.code}
                    />
                </span>
                {currentDropdown && (
                    <UniversalDropdown
                        ref={myRef as MutableRefObject<HTMLSpanElement>}
                        onClickOutside={handleClickOutside}
                        style={{ paddingRight: '0', paddingLeft: '0' }}
                    >
                        <LanguageSearch onInput={handleInput} />
                        <LanguageList
                            languages={filteredLanguages.filter((e) => e.code != currentLanguage.code)}
                            onLanguageChange={({ code, label }, type) => {
                                onLanguageChange({ code, label }, type);
                                setCurrentDropdown(false);
                            }}
                            type={type}
                        />
                    </UniversalDropdown>
                )}
            </div>
        </>
    );
};
export default memo(LanguageDropdown);
