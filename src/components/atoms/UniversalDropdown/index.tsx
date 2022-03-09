import React, { PropsWithChildren, useRef } from 'react';
import clickOutside from '../../hooks/clickOutside';
import styles from './UniversalDropdown.module.scss';

type Props = PropsWithChildren<{
    style?: object;
    onClickOutside: (e: MouseEvent) => void;
}>;

export default function UniversalDropdown({ children, style, onClickOutside }: Props) {
    const myRef = useRef<HTMLDivElement>(null);
    clickOutside(myRef, onClickOutside);

    return (
        <div data-testid='universal-dropdown' ref={myRef} style={style} className={styles.dropdown}>
            {children}
        </div>
    );
}
