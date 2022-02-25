import axios from "axios";
import React, { useEffect, useState } from "react";

import { setFilters } from "../../../app/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

import SidebarItem from "../../molecules/SidebarItem";
import GenreButton from "../../atoms/GenreButton";

export default function PopularFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.value);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
      )
      .then((res) => {
        setGenres(res.data.genres);
      });
  }, []);

  function isActive(id) {
    return filters.includes(id);
  }

  return (
    <SidebarItem label="Filter">
      <p>Genres</p>
      {genres.map(({ id, name }) => (
        <GenreButton
          key={id}
          label={name}
          isActive={isActive(id)}
          onClick={() => dispatch(setFilters(id))}
        />
      ))}
    </SidebarItem>
  );
}
