import React from 'react';
import classNames from 'classnames';
import styles from './MainButton.module.scss';

interface Props {
    label: string;
    updated: boolean;
    type?: string;
    onClick: () => void;
}

const SearchButton = ({ label, updated, onClick, type }: Props) => {
    return (
        <button
        id='button'
            onClick={() => onClick()}
            className={classNames(styles.button, updated ? [styles.updated, styles[`${type}`]] : '')}
        >
            {label}
        </button>
    );
};
export default SearchButton;
