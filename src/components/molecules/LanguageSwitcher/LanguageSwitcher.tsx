import { Language, Type } from 'interfaces/Language';
import React, { useState } from 'react';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import { languages } from './languages';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = React.forwardRef<HTMLDivElement>((_, ref) => {
    const [currentLanguage, setCurrentLanguage] = useState({
        code: languages[0].code,
        label: languages[0].label,
    });
    const [fallbackLanguage, setFallbackLanguage] = useState({
        code: languages[1].code,
        label: languages[1].label,
    });

    function onLanguageChange({ code, label }: Language, type: Type) {
        if (type == 'fallback') {
            setFallbackLanguage({ code, label });
        } else {
            setCurrentLanguage({ code, label });
        }
    }

    const [dropdown, setDropdown] = useState(false);

    return (
        <div ref={ref} className={styles.box}>
            <p data-testid='language-switcher-toggle' onClick={() => setDropdown(!dropdown)} className={styles.toggle}>
                {currentLanguage.code}
            </p>
            {dropdown && (
                <LanguageDropdown
                    onClickOutside={() => {
                        setDropdown(false);
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

export default LanguageSwitcher;
