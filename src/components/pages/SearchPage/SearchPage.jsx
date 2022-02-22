import React, { useState, useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";

import axios from "axios";

import MainTemplate from "../../templates/MainTemplate/MainTemplate";

import MainMenu from "../../organisms/MainMenu/MainMenu";
import SearchSidebar from "../../organisms/SearchSidebar/SearchSidebar";
import SearchContent from "../../organisms/SearchContent/SearchContent";
import Footer from "../../organisms/Footer/Footer";

export default function SearchPage() {
  const [movies, setMovies] = useState({ results: [], count: null });
  const [shows, setShows] = useState({ results: [], count: null });
  const [people, setPeople] = useState({ results: [], count: null });
  const [companies, setCompanies] = useState({ results: [], count: null });
  const [keywords, setKeywords] = useState({ results: [], count: null });
  const [collections, setCollections] = useState({ results: [], count: null });
  const [networks, setNetworks] = useState({ results: [], count: null });

  const { type } = useParams();
  let { search } = useLocation();

  const types = [
    "movie",
    "tv",
    "person",
    "company",
    "keyword",
    "collection",
    "network",
  ];

  useEffect(() => {
    for (const t of types) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/${t}?api_key=${
            process.env.API_KEY
          }&query=${search.slice(3)}&page=1`
        )
        .then((res) => {
          if (t == "movie") {
            setMovies({
              results: res.data.results,
              count: res.data.total_results,
            });
          } else if (t == "tv") {
            setShows({
              results: res.data.results,
              count: res.data.total_results,
            });
          } else if (t == "person") {
            setPeople({
              results: res.data.results,
              count: res.data.total_results,
            });
          } else if (t == "company") {
            setCompanies({
              results: res.data.results,
              count: res.data.total_results,
            });
          } else if (t == "keyword") {
            setKeywords({
              results: res.data.results,
              count: res.data.total_results,
            });
          } else if (t == "collection") {
            setCollections({
              results: res.data.results,
              count: res.data.total_results,
            });
          } else if (t == "network") {
            setNetworks({
              results: res.data.results,
              count: res.data.total_results,
            });
          }
        });
    }
  }, [search]);

  return (
    <MainTemplate
      header={<MainMenu />}
      sidebar={
        <SearchSidebar
          movies={movies.count}
          shows={shows.count}
          people={people.count}
          companies={companies.count}
          keywords={keywords.count}
          collections={collections.count}
          networks={networks.count}
        />
      }
      content={
        <SearchContent
          movies={movies.results}
          shows={shows.results}
          people={people.results}
          companies={companies.results}
          keywords={keywords.results}
          collections={collections.results}
          networks={networks.results}
        />
      }
      footer={<Footer />}
    />
  );
}
