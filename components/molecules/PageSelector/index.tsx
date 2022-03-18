import React, { memo } from 'react';
import PageSelectorButton from '../../atoms/PageSelectorButton';
import styles from './PageSelector.module.scss';

interface Props {
    totalPages: number;
    onPageChange: (value: number) => void;
    currentPage: number;
};

const PageSelector = ({ totalPages, onPageChange, currentPage }: Props) => {
    return (
        <div className={styles.box}>
            {currentPage - 2 > 0 && (
                <PageSelectorButton onClick={() => onPageChange(currentPage - 2)} page={currentPage - 2} />
            )}
            {currentPage - 1 > 0 && (
                <PageSelectorButton onClick={() => onPageChange(currentPage - 1)} page={currentPage - 1} />
            )}
            <PageSelectorButton page={currentPage} isSelected />
            {currentPage + 1 <= totalPages && (
                <PageSelectorButton onClick={() => onPageChange(currentPage + 1)} page={currentPage + 1} />
            )}
            {currentPage + 2 <= totalPages && (
                <PageSelectorButton onClick={() => onPageChange(currentPage + 2)} page={currentPage + 2} />
            )}
        </div>
    );
};

export default memo(PageSelector);
