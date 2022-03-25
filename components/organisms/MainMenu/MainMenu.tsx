import { languages } from '@components/molecules/LanguageSwitcher/languages';
import React, { useEffect, useRef, useState, memo } from 'react';
import MainMenuLink from '../../atoms/MainMenuLink/MainMenuLink';
import SearchToggle from '../../atoms/SearchToggle/SearchToggle';
import clickOutside from '../../hooks/clickOutside';
import LanguageSwitcher from '../../molecules/LanguageSwitcher/LanguageSwitcher';
import MainMenuItem from '../../molecules/MainMenuItem/MainMenuItem';
import PlusMenuItem from '../../molecules/PlusMenuItem';
import SearchBar from '../../molecules/SearchBar/Searchbar';
import styles from './MainMenu.module.scss';
import { menus } from './mainMenuArray';

const MainMenu = () => {
    const [searchbar, setSearchbar] = useState(false);
    const searchBarRef = useRef<HTMLDivElement>(null);
    const languageListenerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        document.addEventListener('keydown', (e: KeyboardEvent) => handler(e));
        return () => document.removeEventListener('keydown', (e: KeyboardEvent) => handler(e));
    }, []);

    clickOutside([searchBarRef], () => {
        setTimeout(() => {
            setSearchbar(false);
        }, 200);
    });

    const handler = (e: KeyboardEvent) => {
        if (
            languageListenerRef.current != null &&
            (languageListenerRef.current as HTMLDivElement).contains(e.target as HTMLDivElement)
        ) {
            return;
        }
        if (e.code == 'KeyS') {
            setTimeout(() => {
                setSearchbar(true);
            }, 10);
        }
    };

    const onFormSubmit = () => {
        setSearchbar(false);
    }

    return (
        <>
            <div className={styles.background}>
                <div className='container'>
                    <div className={styles.main}>
                        <div className={styles.left}>
                            <MainMenuLink className={styles.title} url='/' label='TMDB' />
                            {menus.map(({ label, links }) => (
                                <MainMenuItem key={label} label={label} links={links} />
                            ))}
                        </div>
                        <div className={styles.right}>
                            <PlusMenuItem />
                            <LanguageSwitcher languages={languages} ref={languageListenerRef} />
                            <MainMenuLink label='Login' />
                            <SearchToggle
                                onToggle={() => {
                                    setSearchbar(!searchbar);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {searchbar && <SearchBar onSubmit={onFormSubmit} ref={searchBarRef} />}
        </>
    );
};
export default memo(MainMenu);
