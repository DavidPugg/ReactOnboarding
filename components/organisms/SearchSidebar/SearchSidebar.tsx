import SearchSidebarItem from '@components/atoms/SearchSidebarItem/SearchSidebarItem';
import React, { memo } from 'react';
import styles from './SearchSidebar.module.scss';

interface Props {
    types: string[];
    counts: number[];
}

const SearchSidebar = ({ types, counts }: Props) => {
    return (
        <div className={styles.main}>
            <p className={styles.title}>Search Results</p>
            <div className={styles.container}>
                {types.map((type, i) => (
                    <SearchSidebarItem
                        key={type}
                        label={type
                            .split('')
                            .map((e, i) => (i == 0 ? e.toUpperCase() : e))
                            .join('')}
                        to={type}
                        count={counts[i]}
                    />
                ))}
            </div>
        </div>
    );
};
export default memo(SearchSidebar);
