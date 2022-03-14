import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from '../interfaces/Movies';
import { RootStateOrAny } from 'react-redux';
import { MoviesAPI } from './../utils/MoviesAPI';
import { setPrevFilters } from './filtersSlice';
import { setPrevSort } from './sortSlice';

interface MoviesState {
    value: Array<Movie>;
    status: string;
    totalResults: number;
}

const moviesAPI = new MoviesAPI();

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async ({ page, loadMore }: { page: number; loadMore: boolean }, { dispatch, getState }) => {
        dispatch(setPrevFilters());
        dispatch(setPrevSort());
        const { filters, sort }: RootStateOrAny = getState();
        const data = await moviesAPI.fetchMovies({ page, filters: filters.value, sort: sort.value });
        return { ...data, loadMore };
    },
);

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        value: [],
        status: '',
        totalResults: 0,
    } as MoviesState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state) => {
            state.status = 'loading';
        }),
            builder.addCase(getMovies.fulfilled, (state, { payload }) => {
                payload.loadMore ? state.value.push(...payload.results) : (state.value = payload.results);
                state.totalResults = payload.total_results;
                state.status = 'success';
            }),
            builder.addCase(getMovies.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default moviesSlice.reducer;
