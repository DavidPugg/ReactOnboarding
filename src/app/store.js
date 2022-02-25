import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import filtersReducer from "./filtersSlice";
import sortReducer from "./sortSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    filters: filtersReducer,
    sort: sortReducer,
  },
});
