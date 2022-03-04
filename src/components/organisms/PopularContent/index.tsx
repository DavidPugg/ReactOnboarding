import { Movie } from 'interfaces/Movies';
import React from 'react';
import { DefaultRootState, RootStateOrAny, useSelector } from 'react-redux';
import MovieItem from '../../molecules/MovieItem/MovieItem';
import styles from './PopularContent.module.scss';

export default function PopularContent() {
    const movies = useSelector<DefaultRootState, Array<Movie>>((state: RootStateOrAny) => state.movies.value);
    return (
        <div className={styles.grid}>
            {movies.map(({ id, poster_path, title, release_date, vote_average }) => (
                <MovieItem
                    key={id}
                    id={id}
                    border
                    img={poster_path}
                    title={title}
                    release={release_date}
                    rating={vote_average}
                />
            ))}
        </div>
    );
}
