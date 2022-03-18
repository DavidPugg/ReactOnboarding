import { createSlice } from '@reduxjs/toolkit';

interface SortState {
    value: string;
    prev: string;
}

export const sortSLice = createSlice({
    name: 'sort',
    initialState: {
        value: 'popularity.desc',
        prev: '',
    } as SortState,
    reducers: {
        setSort: (state, payload) => {
            state.value = payload.payload;
        },
        setPrevSort: (state) => {
            state.prev = state.value;
        },
    },
});

export const { setSort, setPrevSort } = sortSLice.actions;

export default sortSLice.reducer;
