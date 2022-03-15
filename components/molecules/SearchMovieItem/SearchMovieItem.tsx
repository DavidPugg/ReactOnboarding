import React from 'react';
import Link from 'next/link';
import styles from './SearchMovieItem.module.scss';
import Image from 'next/image';

interface Props {
    id: number;
    img: string;
    title: string;
    release: string;
}

const SearchMovieItem = ({ id, img, title, release }: Props) => {
    const returnImage = () => {
        if (img) return `https://image.tmdb.org/t/p/w500/${img}`;
        return '/notfound.png';
    };

    return (
        <Link href={`/movie/${id}`}>
            <a className={styles.link}>
                <div className={styles.item}>
                    <Image className={styles.img} src={returnImage()} alt='Movie poster' width='120' height='180' />
                    <div className={styles.content}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.release}>{release}</p>
                    </div>
                </div>
            </a>
        </Link>
    );
};
export default SearchMovieItem;
