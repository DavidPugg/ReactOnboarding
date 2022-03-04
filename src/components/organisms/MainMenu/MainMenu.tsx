import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainMenuLink from '../../atoms/MainMenuLink/MainMenuLink';
import SearchToggle from '../../atoms/SearchToggle/SearchToggle';
import clickOutside from '../../hooks/clickOutside';
import LanguageSwitcher from '../../molecules/LanguageSwitcher/LanguageSwitcher';
import MainMenuItem from '../../molecules/MainMenuItem/MainMenuItem';
import PlusMenuItem from '../../molecules/PlusMenuItem';
import SearchBar from '../../molecules/SearchBar/Searchbar';
import styles from './MainMenu.module.scss';
import { menus } from './mainMenuArray';

export default function MainMenu() {
    const [searchbar, setSearchbar] = useState(false);
    const { search } = useLocation();

    const searchBarRef = useRef<HTMLDivElement>(null);
    const languageListenerRef = useRef<HTMLDivElement>(null);

    clickOutside(searchBarRef, () => {
        setTimeout(() => {
            setSearchbar(false);
        }, 200);
    });

    useEffect(() => {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if ((languageListenerRef.current as HTMLDivElement).contains(e.target as HTMLDivElement)) {
                return;
            }
            if (e.code == 'KeyS') {
                setTimeout(() => {
                    setSearchbar(true);
                }, 10);
            }
        });
        return () =>
            window.removeEventListener('keydown', (e: KeyboardEvent) => {
                if ((languageListenerRef.current as HTMLDivElement).contains(e.target as HTMLDivElement)) {
                    return;
                }
                if (e.code == 'KeyS') {
                    setTimeout(() => {
                        setSearchbar(true);
                    }, 10);
                }
            });
    }, []);

    useEffect(() => {
        setSearchbar(false);
        return () => setSearchbar(true);
    }, [search]);

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
                            <LanguageSwitcher ref={languageListenerRef} />
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
            {searchbar && <SearchBar ref={searchBarRef} />}
        </>
    );
}
