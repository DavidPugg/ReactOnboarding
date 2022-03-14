import UniversalDropdown from '../..//atoms/UniversalDropdown';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './TripleDot.module.scss';

export default function TripleDot() {
    const [dropdown, setDropdown] = useState<boolean>(false);

    return (
        <div className={styles.box}>
            <svg className={styles.svg} onClick={() => setDropdown(!dropdown)}>
                <use href={`/svgs.svg#icon-dots`}></use>
            </svg>
            {dropdown && (
                <UniversalDropdown
                    onClickOutside={() => setDropdown(false)}
                    style={{ paddingLeft: '0', paddingRight: '0' }}
                >
                    <p className={styles.text}>Want to rate or add this iten to a list?</p>
                    <Link href='#'>
                        <a className={styles.link}>
                            Login
                            <svg className={styles.arrow}>
                                <use href={`/svgs.svg#icon-arrow`}></use>
                            </svg>
                        </a>
                    </Link>
                    <p className={styles.text}>Not a Member?</p>
                    <Link href='#'>
                        <a className={styles.link}>
                            Login
                            <svg className={styles.arrow}>
                                <use href={`/svgs.svg#icon-arrow`}></use>
                            </svg>
                        </a>
                    </Link>
                </UniversalDropdown>
            )}
        </div>
    );
}
