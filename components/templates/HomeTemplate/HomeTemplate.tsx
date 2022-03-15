import React, { PropsWithChildren } from 'react';
import styles from './HomeTemplate.module.scss';

type Props = PropsWithChildren<{
    header: JSX.Element;
    footer: JSX.Element;
}>;

const HomeTemplate = ({ header, footer, children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <header>{header}</header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>{footer}</footer>
        </div>
    );
}

export default HomeTemplate;
