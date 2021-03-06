import { Language, Type } from 'interfaces/Language';
import React, { MutableRefObject, useRef, useState, memo, useCallback } from 'react';
import styles from './LanguageSwitcher.module.scss';
import UniversalDropdown from '../../atoms/UniversalDropdown';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';

interface Props {
    languages: Array<Language>;
}

const LanguageSwitcher = React.forwardRef<HTMLDivElement, Props>(({ languages }, ref) => {
    const toggleRef = useRef() as MutableRefObject<HTMLParagraphElement>;
    const [dropdown, setDropdown] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
    const [fallbackLanguage, setFallbackLanguage] = useState<Language>(languages[1]);

    const onLanguageChange = useCallback(({ code, label }: Language, type: Type) => {
        type == 'fallback' ? setFallbackLanguage({ code, label }) : setCurrentLanguage({ code, label });
    }, [])

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
                <UniversalDropdown ref={toggleRef} onClickOutside={() => setDropdown(false)}>
                    <p className={styles.title}>Language preferences</p>
                    <LanguageDropdown
                        type='current'
                        title='Default language'
                        languages={languages}
                        currentLanguage={currentLanguage}
                        onLanguageChange={onLanguageChange}
                    />
                    <LanguageDropdown
                        type='fallback'
                        title='Fallback language'
                        languages={languages}
                        currentLanguage={fallbackLanguage}
                        onLanguageChange={onLanguageChange}
                    />
                </UniversalDropdown>
            )}
        </div>
    );
});
export default memo(LanguageSwitcher);
