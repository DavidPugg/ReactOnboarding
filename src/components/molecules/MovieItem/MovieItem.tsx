import notfound from '../../../assets/notfound.png';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import TripleDot from '../TripleDot';
import styles from './MovieItem.module.scss';
import ProgressBar from '@components/atoms/ProgressBar';

interface Props {
    id: number;
    img: string;
    title: string;
    release: string;
    rating: number;
    style?: object;
    border?: boolean;
}

const MovieItem = ({ id, img, title, release, rating, style, border }: Props) => {
    function returnImage() {
        if (img) return `https://image.tmdb.org/t/p/w500/${img}`;
        return notfound;
    }
    return (
        <div className={classNames(styles.box, border ? styles.border : '')}>
            <TripleDot />
            <Link className={styles.link} to={`/movie/${id}`}>
                <div className={styles.imgbox}>
                    <img style={style} className={styles.img} src={returnImage()} alt='Movie poster' />
                    <div className={styles.rating}>
                        <ProgressBar rating={rating} />
                    </div>
                </div>
                <div className={styles.textbox}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.release}>{release}</p>
                </div>
            </Link>
        </div>
    );
};
export default MovieItem;
