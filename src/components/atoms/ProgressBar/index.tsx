import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import styles from './ProgressBar.module.scss';

export default function ProgressBar({ rating, big }: { rating: number; big?: boolean }) {
    function returnColor() {
        if (rating * 10 < 30) {
            return 'red';
        } else if (rating * 10 < 70) {
            return 'yellow';
        } else {
            return 'green';
        }
    }

    return (
        <CircularProgressbar
            className={big ? styles.big : styles.small}
            value={rating * 10}
            text={rating * 10 == 0 ? 'NR' : `${rating * 10}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: 'black',
                textColor: '#fff',
                pathColor: `${returnColor()}`,
                trailColor: 'transparent',
            })}
        />
    );
}
