import classNames from 'classnames';
import React from 'react';
import styles from './GenreButton.module.scss';

interface Props {
    label: string;
    onClick: () => void;
    isActive: boolean;
}

const GenreButton = ({ label, onClick, isActive }: Props) => {
    return (
        <p onClick={() => onClick()} className={classNames(styles.genre, isActive ? styles.selected : '')}>
            {label}
        </p>
    );
};
export default GenreButton;
