import { Language, Type } from 'interfaces/Language';
import React, { useState } from 'react';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import { languages } from './languages';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = React.forwardRef<HTMLDivElement>((_, ref) => {
    const [currentLanguage, setCurrentLanguage] = useState({
        code: 'en',
        label: 'English',
    });
    const [fallbackLanguage, setFallbackLanguage] = useState({
        code: 'de',
        label: 'German',
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
            <p onClick={() => setDropdown(!dropdown)} className={styles.toggle}>
                {currentLanguage.code}
            </p>
            {dropdown && (
                <LanguageDropdown
                    data-testid='dropdown'
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
