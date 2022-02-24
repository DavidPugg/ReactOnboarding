import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { Appcontext } from "../../pages/PopularPage/context";

import SidebarItem from "../../molecules/SidebarItem";
import GenreButton from "../../atoms/GenreButton";

export default function PopularFilter() {
  const [genres, setGenres] = useState([]);
  const { filters, updateFilters } = useContext(Appcontext);

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
          onClick={() => updateFilters(id)}
        />
      ))}
    </SidebarItem>
  );
}
