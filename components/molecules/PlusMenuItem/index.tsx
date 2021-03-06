import React, { useState } from 'react';
import UniversalDropdown from '../../atoms/UniversalDropdown';
import styles from './PlusMenuItem.module.scss';

const PlusMenuItem = () => {
    const [dropdown, setDropdown] = useState<boolean>(false);

    return (
        <div className={styles.box}>
            <svg className={styles.svg} onClick={() => setDropdown(!dropdown)}>
                <use href={`/svgs.svg#icon-plus`}></use>
            </svg>
            {dropdown && (
                <UniversalDropdown onClickOutside={() => setDropdown(false)}>
                    <p className={styles.text}>Can't find a movie or TV show?</p>
                    <p className={styles.text}>Login to create it.</p>
                </UniversalDropdown>
            )}
        </div>
    );
};
export default PlusMenuItem;
