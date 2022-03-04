import MainButton from '../../atoms/MainButton';
import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../../app/moviesSlice';
import PopularFilter from '../PopularFilter';
import PopularSort from '../PopularSort';
import styles from './PopularSidebar.module.scss';

export default function PopularSidebar() {
    const dispatch = useDispatch();
    const filters = useSelector((state: RootStateOrAny) => state.filters.value);
    const sort = useSelector((state: RootStateOrAny) => state.sort.value);
    const prevFilters = useSelector((state: RootStateOrAny) => state.filters.prev);
    const prevSort = useSelector((state: RootStateOrAny) => state.sort.prev);

    function hasUpdated() {
        const sameFilters =
            filters.every((e: object) => {
                return prevFilters.includes(e);
            }) && filters.length == prevFilters.length;
        const sameSort = sort == prevSort;
        return !sameSort || !sameFilters;
    }

    return (
        <div className={styles.sidebar}>
            <p className={styles.title}>Popular Movies</p>
            <PopularSort />
            <PopularFilter />
            <MainButton
                label='Search'
                updated={hasUpdated()}
                onClick={() => {
                    hasUpdated() ? dispatch(getMovies({ page: 1, loadMore: false })) : '';
                }}
            />
        </div>
    );
}
