import React from 'react';
import classNames from 'classnames';

import styles from './MainButton.module.scss';

type Props = {
    label: string;
    updated: boolean;
    type: string;
    onClick: () => void;
};

export default function SearchButton({ label, updated, onClick, type }: Props) {
    return (
        <button
            onClick={() => onClick()}
            className={classNames(styles.button, updated ? [styles.updated, styles[`${type}`]] : '')}
        >
            {label}
        </button>
    );
}
