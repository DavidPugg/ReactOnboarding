import { createSlice } from '@reduxjs/toolkit';

interface FiltersState {
    value: Array<string>;
    prev: Array<string>;
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        value: [],
        prev: [],
    } as FiltersState,

    reducers: {
        setFilters: (state, { payload }) => {
            state.value = state.value.includes(payload)
                ? state.value.filter((e) => e != payload)
                : [...state.value, payload];
        },
        setPrevFilters: (state) => {
            state.prev = state.value;
        },
    },
});
export const { setFilters, setPrevFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
