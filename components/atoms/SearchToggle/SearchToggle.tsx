import React from 'react';
import styles from './SearchToggle.module.scss';

interface Props {
    onToggle: () => void;
}

const SearchToggle = ({ onToggle }: Props) => {
    return (
        <svg className={styles.svg} onClick={() => onToggle()}>
            <use href={`/svgs.svg#icon-magnifying-glass`}></use>
        </svg>
    );
};
export default SearchToggle;
