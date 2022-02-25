import React from "react";

import PopularSort from "../PopularSort";
import PopularFilter from "../PopularFilter";
import MainButton from "@components/atoms/MainButton";

import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../../app/moviesSlice";

import styles from "./PopularSidebar.module.scss";

export default function PopularSidebar() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.value);
  const sort = useSelector((state) => state.sort.value);
  const prevFilters = useSelector((state) => state.filters.prev)
  const prevSort = useSelector((state) => state.sort.prev)

  function hasUpdated() {
    const sameFilters =
      filters.every((e) => {
        return prevFilters.includes(e);
      }) && filters.length == prevFilters.length;
    const sameSort = sort == prevSort;
    return !sameSort || !sameFilters;
  }

  return (
    <div className={styles.sidebar}>
      <p className={styles.title}>Popular Movies</p>
      <PopularSort />
      <PopularFilter />
      <MainButton
        label="Search"
        updated={hasUpdated()}
        onClick={() => {
          hasUpdated() ? dispatch(getMovies({page: 1})) : "";
        }}
      />
    </div>
  );
}
