import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../../redux/filtersSlice';
import GenreButton from '../../atoms/GenreButton';
import SidebarItem from '../../molecules/SidebarItem';

const PopularFilter = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state: RootStateOrAny) => state.filters.value);

    interface Genre {
        id: number;
        name: string;
    }

    const [genres, setGenres] = useState<Array<Genre>>([]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`)
            .then((res) => {
                setGenres(res.data.genres);
            });
    }, []);

    const isActive = (id: number) => {
        return filters.includes(id);
    };

    return (
        <SidebarItem label='Filter'>
            <p>Genres</p>
            <>
                {genres.map(({ id, name }) => (
                    <GenreButton
                        key={id}
                        label={name}
                        isActive={isActive(id)}
                        onClick={() => dispatch(setFilters(id))}
                    />
                ))}
            </>
        </SidebarItem>
    );
};
export default PopularFilter;