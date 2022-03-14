import React, { PropsWithChildren } from 'react';
import styles from './SearchSidebar.module.scss';

export default function SearchSidebar({ children }: PropsWithChildren<{}>) {
    return (
        <div className={styles.main}>
            <p className={styles.title}>Search Results</p>
            <div className={styles.container}>{children}</div>
        </div>
    );
}
