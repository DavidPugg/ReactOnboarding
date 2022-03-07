import { Language, Type } from 'interfaces/Language';
import React, { useState } from 'react';
import LanguageSearch from '../../atoms/LanguageSearch';
import MainLanguageOption from '../../atoms/MainLanguageOption/MainLanguageOption';
import UniversalDropdown from '../../atoms/UniversalDropdown';
import LanguageList from '../LanguageList/LanguageList';
import styles from './LanguageDropdown.module.scss';

interface Props {
    languages: Array<Language>;
    currentLanguage: Language;
    fallbackLanguage: Language;
    onLanguageChange: ({ code, label }: Language, type: Type) => void;
    onClickOutside: () => void;
    testId?: string;
}

export default function LanguageDropdown({
    languages,
    currentLanguage,
    fallbackLanguage,
    onLanguageChange,
    onClickOutside,
}: Props) {
    const [currentDropdown, setCurrentDropdown] = useState(false);
    const [fallbackDropdown, setFallbackDropdown] = useState(false);
    const [filteredLanguages, setFilteredLanguages] = useState(languages);

    function handleInput(value: string) {
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
    }

    function handleLanguageChange() {
        setCurrentDropdown(false);
        setFallbackDropdown(false);
    }

    return (
        <div data-testid="language-dropdown">
            <UniversalDropdown onClickOutside={() => onClickOutside()}>
                <p className={styles.title}>Language preferences</p>
                <div className={styles.selection}>
                    <p className={styles.text}>Default language</p>
                    <MainLanguageOption
                        onClick={() => setCurrentDropdown(!currentDropdown)}
                        label={currentLanguage.label}
                        code={currentLanguage.code}
                    />
                    {currentDropdown && (
                        <UniversalDropdown
                            onClickOutside={() => {
                                setCurrentDropdown(false);
                                setFilteredLanguages(languages);
                            }}
                            style={{ paddingRight: '0', paddingLeft: '0' }}
                        >
                            <LanguageSearch onInput={handleInput} />
                            <LanguageList
                                languages={filteredLanguages.filter((e) => e.code != currentLanguage.code)}
                                onLanguageChange={({ code, label }: Language, type: Type) => {
                                    onLanguageChange({ code, label }, type);
                                    handleLanguageChange();
                                }}
                                type='current'
                            />
                        </UniversalDropdown>
                    )}
                </div>

                <div className={styles.selection}>
                    <p className={styles.text}>Fallback language</p>
                    <MainLanguageOption
                        onClick={() => {
                            setFallbackDropdown(!fallbackDropdown);
                            setFilteredLanguages(languages);
                        }}
                        label={fallbackLanguage.label}
                        code={fallbackLanguage.code}
                    />
                    {fallbackDropdown && (
                        <UniversalDropdown
                            onClickOutside={() => setFallbackDropdown(false)}
                            style={{ paddingRight: '0', paddingLeft: '0' }}
                        >
                            <LanguageSearch onInput={handleInput} />
                            <LanguageList
                                languages={filteredLanguages.filter((e) => e.code != fallbackLanguage.code)}
                                onLanguageChange={({ code, label }: Language, type: Type) => {
                                    onLanguageChange({ code, label }, type);
                                    handleLanguageChange();
                                }}
                                type='fallback'
                            />
                        </UniversalDropdown>
                    )}
                </div>
            </UniversalDropdown>
        </div>
    );
}
