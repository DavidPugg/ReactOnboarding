import Toggler from '@components/molecules/Toggler';
import { PopularSearchResponse } from 'interfaces/API';
import { Movie, Tv } from 'interfaces/Movies';
import React, { useEffect, useState } from 'react';
import MovieItem from '../../molecules/MovieItem/MovieItem';
import styles from './Popular.module.scss';

interface Props {
    dataSrc: (type: string) => Promise<PopularSearchResponse<Movie | Tv>>;
}

export default ({ dataSrc }: Props) => {
    const [items, setItems] = useState([] as Array<any>);
    const [type, setType] = useState('movie');

    useEffect(() => {
        handleItems('tv');
    }, []);

    const handleItems = async (type: string) => {
        const res = await dataSrc(type);
        setItems(res.results);
        setType(type);
    };

    return (
        <div className={`container`}>
            <div className={styles.titlebox}>
                <h2 className={styles.title}>What's Popular</h2>

                <Toggler
                    options={[
                        { label: 'On TV', type: 'tv' },
                        { label: 'In Theaters', type: 'movie' },
                    ]}
                    func={(type) => {
                        handleItems(type);
                    }}
                />
            </div>

            <div className={styles.main}>
                {type == 'movie' &&
                    items
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
                    items
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
