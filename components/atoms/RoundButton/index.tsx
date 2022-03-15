import React from 'react';
import styles from './RoundButton.module.scss';

interface Props {
    icon: string;
    text: string;
};

const RoundButton =({ icon, text }: Props) => {
    return (
        <div className={styles.item}>
            <svg className={styles.svg}>
                <use href={`/svgs.svg#icon-${icon}`}></use>
            </svg>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default RoundButton;
