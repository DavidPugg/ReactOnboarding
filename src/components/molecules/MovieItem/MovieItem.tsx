import notfound from '../../../assets/notfound.png';
import classNames from 'classnames';
import React from 'react';
import Link from 'next/link';
import TripleDot from '../TripleDot';
import styles from './MovieItem.module.scss';
import ProgressBar from '@components/atoms/ProgressBar';

interface Props {
    id: number;
    img: string;
    title: string;
    release: string;
    rating: number;
    border?: boolean;
}

const MovieItem = ({ id, img, title, release, rating, border }: Props) => {
    const returnImage = () => {
        if (img && img != '') {
            return `https://image.tmdb.org/t/p/w500/${img}`;
        }
        return notfound.src;
    };

    const getTitle = () => {
        if (title && title.length > 40) {
            return `${title.slice(0, 40)}...`;
        }
        return title;
    };
    return (
        <div className={classNames(styles.box, border ? styles.border : '')}>
            <TripleDot />
            <Link href={`/movie/${id}`}>
                <a className={styles.link}>
                    <div className={styles.imgbox}>
                        <img className={styles.img} src={returnImage()} alt='Movie poster' />
                        <div className={styles.rating}>
                            <ProgressBar rating={rating} />
                        </div>
                    </div>
                    <div className={styles.textbox}>
                        <h3 className={styles.title}>{getTitle()}</h3>
                        <p className={styles.release}>{release}</p>
                    </div>
                </a>
            </Link>
        </div>
    );
};
export default MovieItem;
