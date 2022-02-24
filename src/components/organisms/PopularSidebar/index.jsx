import React, { useContext } from "react";

import PopularSort from "../PopularSort";
import PopularFilter from "../PopularFIlter";
import MainButton from '@components/atoms/MainButton';

import { Appcontext } from "../../pages/PopularPage/context";

import styles from "./PopularSidebar.module.scss";

export default function PopularSidebar() {

  const { updateMovies, filters, sort, prevFilters, prevSort } = useContext(Appcontext);

  function hasUpdated() {
    const sameFilters = (filters.every(e => {return prevFilters.includes(e)}) && filters.length == prevFilters.length)
    const sameSort = (sort == prevSort)
    return !sameSort || !sameFilters
  }

  return (
    <div className={styles.sidebar}>
      <p className={styles.title}>Popular Movies</p>
      <PopularSort />
      <PopularFilter />
      <MainButton label="Search" updated={hasUpdated()} onClick={() => {hasUpdated() ? updateMovies() : ''}}/>
    </div>
  );
}
