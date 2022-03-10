import { Language, Type } from 'interfaces/Language';
import React, { MutableRefObject, useRef, useState, useEffect } from 'react';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import styles from './LanguageSwitcher.module.scss';

export default React.forwardRef<HTMLDivElement, { languages: Array<Language> }>(({ languages }, ref) => {
    const toggleRef = useRef() as MutableRefObject<HTMLParagraphElement>;
    const [dropdown, setDropdown] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState<Language>({} as Language);
    const [fallbackLanguage, setFallbackLanguage] = useState<Language>({} as Language);

    useEffect(() => {
        setCurrentLanguage(languages[0]);
        setFallbackLanguage(languages[1]);
    }, []);

    function onLanguageChange({ code, label }: Language, type: Type) {
        type == 'fallback' ? setFallbackLanguage({ code, label }) : setCurrentLanguage({ code, label });
    }

    return (
        <div ref={ref} className={styles.box}>
            <p
                ref={toggleRef}
                data-testid='language-switcher-toggle'
                onClick={() => setDropdown(true)}
                className={styles.toggle}
            >
                {currentLanguage.code}
            </p>
            {dropdown && (
                <LanguageDropdown
                    onClickOutside={(e) => {
                        toggleRef && !toggleRef.current.contains(e.target as Node) ? setDropdown(false) : '';
                    }}
                    onLanguageChange={onLanguageChange}
                    languages={languages}
                    currentLanguage={currentLanguage}
                    fallbackLanguage={fallbackLanguage}
                />
            )}
        </div>
    );
});
