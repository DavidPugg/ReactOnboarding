import React, { CSSProperties } from 'react';
import styles from './SidebarButton.module.scss';

type Props = {
    label: string;
    onClick: () => void;
    style: CSSProperties;
};

export default function SidebarButton({ label, onClick, style }: Props) {
    return (
        <p className={styles.label} onClick={() => onClick()}>
            {label}
            <svg style={style} className={styles.svg}>
                <use href={`/svgs.svg#icon-arrow`}></use>
            </svg>
        </p>
    );
}
