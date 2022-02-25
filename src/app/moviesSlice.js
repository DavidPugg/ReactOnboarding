import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { setPrevFilters } from "./filtersSlice";
import { setPrevSort } from "./sortSlice";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, { dispatch, getState }) => {
    dispatch(setPrevFilters());
    dispatch(setPrevSort());
    const { filters, sort } = getState();
    return axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.API_KEY
        }&language=en-US&sort_by=${
          sort.value
        }&include_adult=false&include_video=false&page=1&with_genres=${filters.value.join(
          ","
        )}`
      )
      .then((res) => res.data.results);
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    value: [],
    status: "",
  },
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.status = "loading";
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    },
    [getMovies.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
