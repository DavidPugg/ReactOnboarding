import { Movie, Tv } from 'interfaces/Movies';
import React, { useEffect, useState } from 'react';
import { MoviesAPI } from '../../../utils/MoviesAPI';
import MovieItem from '../../molecules/MovieItem/MovieItem';
import styles from './Popular.module.scss';

const moviesAPI = new MoviesAPI();

export default function Popular() {
    const [items, setItems] = useState([] as Array<any>);
    const [type, setType] = useState('movie');

    useEffect(() => {
        handleItems<Movie>('movie');
    }, []);

    async function handleItems<T>(type: string) {
        if (type == 'tv') {
            const res = await moviesAPI.fetchPopularMovies<T>({ type });
            setItems(res.results as Array<T>);
            setType(type);
        } else {
            const res = await moviesAPI.fetchPopularMovies<T>({ type });
            setItems(res.results as Array<T>);
            setType(type);
        }
    }

    function getPosition() {
        if (type == 'tv') return { left: '0%' };
        return { left: 'calc(50% + .5rem)' };
    }

    return (
        <div className={`container`}>
            <div className={styles.titlebox}>
                <h2 className={styles.title}>What's Popular</h2>
                <div className={styles.select}>
                    <div className={styles.toggler} style={getPosition()}></div>
                    <div
                        onClick={() => handleItems<Tv>('tv')}
                        className={`${styles.option} ${type == 'tv' ? styles.selected : ''}`}
                    >
                        On TV
                    </div>
                    <div
                        onClick={() => handleItems<Movie>('movie')}
                        className={`${styles.option} ${type == 'movie' ? styles.selected : ''}`}
                    >
                        In Theaters
                    </div>
                </div>
            </div>

            <div className={styles.main}>
                {type == 'movie' &&
                    items.map(({ id, poster_path, title, release_date, vote_average }) => (
                        <MovieItem
                            style={{ width: `8rem` }}
                            key={id}
                            id={id}
                            img={poster_path}
                            title={title}
                            release={release_date}
                            rating={vote_average}
                        />
                    ))}

                {type == 'tv' &&
                    items.map(({ id, poster_path, name, first_air_date, vote_average }) => (
                        <MovieItem
                            style={{ width: `8rem` }}
                            key={id}
                            id={id}
                            img={poster_path}
                            title={name}
                            release={first_air_date}
                            rating={vote_average}
                        />
                    ))}
            </div>
        </div>
    );
}