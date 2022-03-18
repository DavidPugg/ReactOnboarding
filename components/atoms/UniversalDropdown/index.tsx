import React, { PropsWithChildren, RefObject, useEffect, useRef } from 'react';
import clickOutside from '../../hooks/clickOutside';
import styles from './UniversalDropdown.module.scss';

type Props = PropsWithChildren<{
    style?: object;
    onClickOutside: (e: MouseEvent) => void;
}>;

const UniversalDropdown = React.forwardRef<HTMLElement, Props>(({ children, style, onClickOutside }, ref) => {
    const myRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref
            ? clickOutside([myRef, ref as RefObject<HTMLElement>], onClickOutside)
            : clickOutside([myRef], onClickOutside);
    });

    return (
        <div data-testid='universal-dropdown' ref={myRef} style={style} className={styles.dropdown}>
            {children}
        </div>
    );
});
export default UniversalDropdown;
