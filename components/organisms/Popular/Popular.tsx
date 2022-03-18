import Toggler from '@components/molecules/Toggler';
import { Movie, Tv } from 'interfaces/Movies';
import React from 'react';
import MovieItem from '../../molecules/MovieItem/MovieItem';
import styles from './Popular.module.scss';

interface Props {
    items: Array<Movie | Tv>;
    type: string;
    onToggle: (type: string) => void;
}

export default ({ items, type, onToggle }: Props) => {
    return (
        <div className={`container`}>
            <div className={styles.titlebox}>
                <h2 className={styles.title}>What's Popular</h2>

                <Toggler
                    options={[
                        { label: 'In Theaters', type: 'movie' },
                        { label: 'On TV', type: 'tv' },
                    ]}
                    func={(type) => {
                        onToggle(type);
                    }}
                />
            </div>

            <div className={styles.main}>
                {type == 'movie' &&
                    (items as Array<Movie>)
                        .slice(0, 10)
                        .map(({ id, poster_path, title, release_date, vote_average }) => (
                            <MovieItem
                                key={id}
                                id={id}
                                img={poster_path}
                                title={title}
                                release={release_date}
                                rating={vote_average}
                            />
                        ))}

                {type == 'tv' &&
                    (items as Array<Tv>)
                        .slice(0, 10)
                        .map(({ id, poster_path, name, first_air_date, vote_average }) => (
                            <MovieItem
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
};
