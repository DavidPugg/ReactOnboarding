import React from 'react';
import styles from './RoundButton.module.scss';

type Props = {
    icon: string;
    text: string;
};

export default function RoundButton({ icon, text }: Props) {
    return (
        <div className={styles.item}>
            <svg className={styles.svg}>
                <use href={require(`@assets/svgs.svg`) + `#icon-${icon}`}></use>
            </svg>
            <p className={styles.text}>{text}</p>
        </div>
    );
}
