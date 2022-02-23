import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";
import MainMenu from "../../organisms/MainMenu/MainMenu";
import MovieDetails from "../../organisms/MovieDetails/MovieDetails";
import Footer from "../../organisms/Footer/Footer";

export default function DetailsPage() {
  const [details, setDetails] = useState({});
  const [crew, setCrew] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        setDetails(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_KEY}&language=en-US`
      )
      .then((res) => {
        setCrew(res.data.crew);
      });
  }, []);

  return (
    <HomeTemplate header={<MainMenu />} footer={<Footer />}>
      <MovieDetails details={details} crew={crew.slice(0, 6)} />
    </HomeTemplate>
  );
}
