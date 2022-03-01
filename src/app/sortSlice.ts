import { createSlice } from "@reduxjs/toolkit";

export const sortSLice = createSlice({
  name: "sort",
  initialState: {
    value: "popularity.desc",
    prev: ''
  },
  reducers: {
    setSort: (state, payload) => {
      state.value = payload.payload;
    },
    setPrevSort: (state) => {
      state.prev = state.value
    }
  },
});

export const { setSort,setPrevSort } = sortSLice.actions;

export default sortSLice.reducer;
