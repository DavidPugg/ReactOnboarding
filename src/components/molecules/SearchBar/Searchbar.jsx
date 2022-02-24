import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import SearchInput from "../../atoms/SearchInput/SearchInput";
import SearchResult from "../../atoms/SearchResult/SearchResult";

import styles from "./Searchbar.module.scss";

export default function Searchbar() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  function handleSubmit(query) {
    navigate(`/search/movie?q=${query}`);
  }
  function handleItems(input) {
    if (input == "") {
      setItems([]);
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${input}&page=1`
      )
      .then((res) => {
        setItems(res.data.results);
      });
  }
  return (
    <div className={styles.bar}>
      <SearchInput onInput={handleItems} onSubmit={handleSubmit} />
      {items.length > 0 &&
        items.map(({ title, id }) => {
          if (title) {
            return <SearchResult key={id} label={title} />;
          }
        })}
    </div>
  );
}
