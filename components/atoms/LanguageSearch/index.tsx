import React from 'react';
import styles from './LanguageSearch.module.scss';

interface Props {
    onInput: (value: string) => void;
}

export default function LanguageSearch({ onInput }: Props) {
    return (
        <div className={styles.box}>
            <input
                data-testid='language-search'
                className={styles.input}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onInput(e.target.value);
                }}
                type='text'
                autoFocus
            />
            <svg className={styles.svg}>
                <use href={`/svgs.svg#icon-magnifying-glass`}></use>
            </svg>
        </div>
    );
}
