import React, { PropsWithChildren } from 'react';
import styles from './MainTemplate.module.scss';

type Props = PropsWithChildren<{ header: JSX.Element; footer: JSX.Element; sidebar: JSX.Element }>;

const MainTemplate = ({ header, sidebar, footer, children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <header>{header}</header>
            <div className='container'>
                <main className={styles.main}>
                    <div className={styles.sidebar}>{sidebar}</div>
                    <div className={styles.content}>{children}</div>
                </main>
            </div>
            <footer className={styles.footer}>{footer}</footer>
        </div>
    );
};
export default MainTemplate;
