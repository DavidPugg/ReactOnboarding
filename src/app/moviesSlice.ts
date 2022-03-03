import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from 'interfaces/Movies';
import { RootStateOrAny } from 'react-redux';
import { MoviesAPI } from './../utils/MoviesAPI';

import { setPrevFilters } from './filtersSlice';
import { setPrevSort } from './sortSlice';

type Payload = {
    payload: {
        total_results: number;
        results: Array<object>;
    };
};

interface MoviesState {
    value: Array<Movie>;
    status: string;
    totalResults: number;
}

const initialState: MoviesState = {
    value: [],
    status: '',
    totalResults: 0,
};

const moviesAPI = new MoviesAPI();

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async ({ page }: { page: number }, { dispatch, getState }) => {
        dispatch(setPrevFilters());
        dispatch(setPrevSort());
        const { filters, sort }: RootStateOrAny = getState();
        return moviesAPI.fetchMovies({ page, filters: filters.value, sort: sort.value });
    },
);

export const loadMore = createAsyncThunk(
    'movies/loadMore',
    async ({ page }: { page: number }, { dispatch, getState }) => {
        dispatch(setPrevFilters());
        dispatch(setPrevSort());
        const { filters, sort }: RootStateOrAny = getState();
        return moviesAPI.fetchMovies({ page, filters: filters.value, sort: sort.value });
    },
);

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setTotalResults: (state, { payload }) => {
            state.totalResults = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state: RootStateOrAny) => {
            state.status = 'loading';
        }),
            builder.addCase(getMovies.fulfilled, (state: RootStateOrAny, { payload }) => {
                state.totalResults = payload.total_results;
                state.value = payload.results;
                state.status = 'success';
            }),
            builder.addCase(getMovies.rejected, (state: RootStateOrAny) => {
                state.status = 'failed';
            }),
            builder.addCase(loadMore.pending, (state: RootStateOrAny) => {
                state.status = 'loading';
            }),
            builder.addCase(loadMore.fulfilled, (state: RootStateOrAny, { payload }: Payload) => {
                state.totalResults = payload.total_results;
                state.value.push(...payload.results);
                state.status = 'success';
            }),
            builder.addCase(loadMore.rejected, (state: RootStateOrAny) => {
                state.status = 'failed';
            });
    },
});
export const { setTotalResults } = moviesSlice.actions;

export default moviesSlice.reducer;
