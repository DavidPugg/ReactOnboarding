import classNames from 'classnames';
import React from 'react';
import styles from './PageSelectorButton.module.scss';

type Props = {
    page: number;
    onClick?: () => void;
    isSelected?: boolean;
};

const PageSelectorButton = ({ page, onClick, isSelected }: Props) => {
    return (
        <div
            onClick={() => (onClick != undefined ? onClick() : '')}
            className={classNames(styles.button, isSelected ? styles.selected : '')}
        >
            {page}
        </div>
    );
};

export default PageSelectorButton;
