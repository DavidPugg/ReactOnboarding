import React, { PropsWithChildren, memo } from 'react';
import styles from './SearchSidebar.module.scss';

const SearchSidebar = ({ children }: PropsWithChildren<{}>) => {
    return (
        <div className={styles.main}>
            <p className={styles.title}>Search Results</p>
            <div className={styles.container}>{children}</div>
        </div>
    );
}
export default memo(SearchSidebar);