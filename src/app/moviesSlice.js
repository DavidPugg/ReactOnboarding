import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { setPrevFilters } from "./filtersSlice";
import { setPrevSort } from "./sortSlice";


export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async ({ page }, { dispatch, getState }) => {
    dispatch(setPrevFilters());
    dispatch(setPrevSort());
    const { filters, sort } = getState();
    return axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.API_KEY
        }&language=en-US&sort_by=${
          sort.value
        }&include_adult=false&include_video=false&page=${page}&with_genres=${filters.value.join(
          ","
        )}`
      )
      .then((res) => res.data);
  }
);

export const loadMore = createAsyncThunk(
  "movies/loadMore",
  async ({ page }, { dispatch, getState }) => {
    dispatch(setPrevFilters());
    dispatch(setPrevSort());
    const { filters, sort } = getState();
    return axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.API_KEY
        }&language=en-US&sort_by=${
          sort.value
        }&include_adult=false&include_video=false&page=${page}&with_genres=${filters.value.join(
          ","
        )}`
      )
      .then((res) => res.data);
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    value: [],
    status: "",
    totalResults: null,
  },
  reducers: {
    setTotalResults: (state, { payload }) => {
      state.totalResults = payload;
    },
  },
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.status = "loading";
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      state.totalResults = payload.total_results;
      state.value = payload.results
      state.status = "success";
    },
    [getMovies.rejected]: (state) => {
      state.status = "failed";
    },

    [loadMore.pending]: (state) => {
      state.status = "loading";
    },
    [loadMore.fulfilled]: (state, { payload }) => {
      state.totalResults = payload.total_results;
      state.value.push(...payload.results);
      state.status = "success";
    },
    [loadMore.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export const { setTotalResults } = moviesSlice.actions;

export default moviesSlice.reducer;
