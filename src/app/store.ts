import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import filtersReducer from "./filtersSlice";
import sortReducer from "./sortSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filters: filtersReducer,
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch