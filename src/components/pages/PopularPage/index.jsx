import React, { useEffect, useState } from "react";

import MainTemplate from "@components/templates/MainTemplate/MainTemplate";
import MainMenu from "@components/organisms/MainMenu/MainMenu";
import PopularSidebar from "../../organisms/PopularSidebar";
import PopularContent from "../../organisms/PopularContent";
import Footer from "@components/organisms/Footer/Footer";

import { Appcontext } from "./context";
import axios from "axios";

export default function PopularPage() {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState("popularity.desc");

  const [prevFilters, setPrevFilters] = useState([]);
  const [prevSort, setPrevSort] = useState("popularity.desc");

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.API_KEY
        }&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1&with_genres=${filters.join(
          ","
        )}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }

  function updateFilters(id) {
    setFilters((prevState) => {
      return filters.includes(id)
        ? prevState.filter((e) => e != id)
        : [...prevState, id];
    });
  }

  function updateSort(newSort) {
    setSort(newSort);
  }

  function updateMovies() {
    getMovies();
    setPrevFilters([...filters]);
    setPrevSort(sort);
  }

  return (
    <Appcontext.Provider
      value={{
        movies,
        filters,
        sort,
        prevSort,
        prevFilters,
        updateSort,
        updateFilters,
        updateMovies,
      }}
    >
      <MainTemplate
        header={<MainMenu />}
        sidebar={<PopularSidebar />}
        footer={<Footer />}
      >
        <PopularContent />
      </MainTemplate>
    </Appcontext.Provider>
  );
}
