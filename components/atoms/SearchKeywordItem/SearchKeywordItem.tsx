import React from 'react';
import styles from './SearchKeywordItem.module.scss';

const SearchPersonItem = ({ name }: { name: string }) => {
    return (
        <div className={styles.item}>
            <p className={styles.name}>{name}</p>
        </div>
    );
};
export default SearchPersonItem;
