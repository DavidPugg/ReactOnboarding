import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PageSelector from "../../molecules/PageSelector";
import Footer from "../../organisms/Footer/Footer";
import MainMenu from "../../organisms/MainMenu/MainMenu";
import SearchContent from "../../organisms/SearchContent/SearchContent";
import SearchSidebar from "../../organisms/SearchSidebar/SearchSidebar";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

export default function SearchPage() {
  const navigate = useNavigate();
  let { search } = useLocation();
  let { type } = useParams();
  const types = ["movie", "tv", "person", "company", "keyword", "collection"];

  const query = new URLSearchParams(search).get('q');
  const page = new URLSearchParams(search).get('page');

  const [movies, setMovies] = useState({
    results: [],
    count: null,
    totalPages: null,
  });
  const [shows, setShows] = useState({
    results: [],
    count: null,
    totalPages: null,
  });
  const [people, setPeople] = useState({
    results: [],
    count: null,
    totalPages: null,
  });
  const [companies, setCompanies] = useState({
    results: [],
    count: null,
    totalPages: null,
  });
  const [keywords, setKeywords] = useState({
    results: [],
    count: null,
    totalPages: null,
  });
  const [collections, setCollections] = useState({
    results: [],
    count: null,
    totalPages: null,
  });

  useEffect(() => {
    getMovies(1);
  }, [query, type]);

  function handlePageChange(p: number) {
    window.scrollTo(0, 0)
    navigate(`/search/${type}?q=${query}&page=${p}`)
    getMovies(p);
  }

  function getPages() {
    switch (type) {
      case "movie":
        return movies.totalPages;
      case "tv":
        return shows.totalPages;
      case "person":
        return people.totalPages;
      case "company":
        return companies.totalPages;
      case "keyword":
        return keywords.totalPages;
      case "collection":
        return collections.totalPages;
        default: return 0;
    }
  }

  function getMovies(page: number) {
    for (const t of types) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/${t}?api_key=${
            process.env.API_KEY
          }&query=${search.slice(3)}&page=${page}`
        )
        .then((res) => {
          if (t == "movie") {
            setMovies({
              results: res.data.results,
              count: res.data.total_results,
              totalPages: res.data.total_pages,
            });
          } else if (t == "tv") {
            setShows({
              results: res.data.results,
              count: res.data.total_results,
              totalPages: res.data.total_pages,
            });
          } else if (t == "person") {
            setPeople({
              results: res.data.results,
              count: res.data.total_results,
              totalPages: res.data.total_pages,
            });
          } else if (t == "company") {
            setCompanies({
              results: res.data.results,
              count: res.data.total_results,
              totalPages: res.data.total_pages,
            });
          } else if (t == "keyword") {
            setKeywords({
              results: res.data.results,
              count: res.data.total_results,
              totalPages: res.data.total_pages,
            });
          } else if (t == "collection") {
            setCollections({
              results: res.data.results,
              count: res.data.total_results,
              totalPages: res.data.total_pages,
            });
          }
        });
    }
  }

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
        />
      }
      footer={<Footer />}
    >
      <SearchContent
        movies={movies.results}
        shows={shows.results}
        people={people.results}
        companies={companies.results}
        keywords={keywords.results}
        collections={collections.results}
      />
      <PageSelector
        totalPages={getPages()}
        onPageChange={(p: number) => handlePageChange(p)}
        currentPage={Number(page)}
      />
    </MainTemplate>
  );
}
 