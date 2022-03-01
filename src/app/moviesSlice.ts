import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootStateOrAny } from "react-redux";

import { setPrevFilters } from "./filtersSlice";
import { setPrevSort } from "./sortSlice";

type Payload = {
  payload: {
    total_results: number;
    results: Array<object>;
  };
};

interface MoviesState {
  value: Array<object>;
  status: string;
  totalResults: number;
}

const initialState: MoviesState = {
  value: [],
  status: "",
  totalResults: 0,
};

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async ({ page }: { page: number }, { dispatch, getState }) => {
    dispatch(setPrevFilters());
    dispatch(setPrevSort());
    const { filters, sort }: RootStateOrAny = getState();
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
  async ({ page }: { page: string }, { dispatch, getState }) => {
    dispatch(setPrevFilters());
    dispatch(setPrevSort());
    const { filters, sort }: RootStateOrAny = getState();
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
  initialState,
  reducers: {
    setTotalResults: (state, { payload }) => {
      state.totalResults = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state: RootStateOrAny) => {
      state.status = "loading";
    }),
      builder.addCase(
        getMovies.fulfilled,
        (state: RootStateOrAny, { payload }: Payload) => {
          state.totalResults = payload.total_results;
          state.value = payload.results;
          state.status = "success";
        }
      ),
      builder.addCase(getMovies.rejected, (state: RootStateOrAny) => {
        state.status = "failed";
      }),
      builder.addCase(loadMore.pending, (state: RootStateOrAny) => {
        state.status = "loading";
      }),
      builder.addCase(
        loadMore.fulfilled,
        (state: RootStateOrAny, { payload }: Payload) => {
          state.totalResults = payload.total_results;
          state.value.push(...payload.results);
          state.status = "success";
        }
      ),
      builder.addCase(loadMore.rejected, (state: RootStateOrAny) => {
        state.status = "failed";
      });
  },
});
export const { setTotalResults } = moviesSlice.actions;

export default moviesSlice.reducer;
