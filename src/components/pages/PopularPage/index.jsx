import React, { useState, useEffect } from "react";

import axios from "axios";

import MainTemplate from "@components/templates/MainTemplate/MainTemplate";
import MainMenu from "@components/organisms/MainMenu/MainMenu";
import PopularSidebar from "../../organisms/PopularSidebar";
import PopularContent from "../../organisms/PopularContent";
import Footer from "@components/organisms/Footer/Footer";

import { Appcontext } from "./context";

export default function PopularPage() {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState("");

  const updateFilters = (id) => {
    setFilters((prevState) => {
      return filters.includes(id)
        ? prevState.filter((e) => e != id)
        : [...prevState, id];
    });
  };

  function updateSort(newSort) {
    setSort(newSort);
    console.log(newSort);
  }

  return (
    <Appcontext.Provider
      value={{ movies, filters, sort, updateSort, updateFilters }}
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
