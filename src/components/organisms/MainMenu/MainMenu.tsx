import { languages } from '@components/molecules/LanguageSwitcher/languages';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
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
    const router = useRouter();
    const query = router.query;

    const searchBarRef = useRef<HTMLDivElement>(null);
    const languageListenerRef = useRef<HTMLDivElement>(null);

    clickOutside([searchBarRef], () => {
        setTimeout(() => {
            setSearchbar(false);
        }, 200);
    });

    useEffect(() => {
        document.addEventListener('keydown', (e: KeyboardEvent) => {
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
        });
        return () =>
            document.removeEventListener('keydown', (e: KeyboardEvent) => {
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
            });
    }, []);

    useEffect(() => {
        setSearchbar(false);
    }, [query]);

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
            {searchbar && <SearchBar ref={searchBarRef} />}
        </>
    );
}
