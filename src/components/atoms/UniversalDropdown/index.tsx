import React, { PropsWithChildren, useRef } from 'react';
import clickOutside from '../../hooks/clickOutside';
import styles from './UniversalDropdown.module.scss';

type Props = PropsWithChildren<{
    style?: object;
    onClickOutside: () => void;
}>;

export default function UniversalDropdown({ children, style, onClickOutside }: Props) {
    const myRef = useRef<HTMLDivElement>(null);
    clickOutside(myRef, () => {
        setTimeout(() => {
            onClickOutside();
        }, 100);
    });

    return (
        <div ref={myRef} style={style} className={styles.dropdown}>
            {children}
        </div>
    );
}
