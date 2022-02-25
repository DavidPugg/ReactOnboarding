import React, { useEffect } from "react";

import MainTemplate from "@components/templates/MainTemplate/MainTemplate";
import MainMenu from "@components/organisms/MainMenu/MainMenu";
import PopularSidebar from "../../organisms/PopularSidebar";
import PopularContent from "../../organisms/PopularContent";
import Footer from "@components/organisms/Footer/Footer";
import PageSelector from "../../molecules/PageSelector";

import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "@src/app/moviesSlice";

export default function PopularPage() {
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.movies.totalPages)

  useEffect(() => {
    dispatch(getMovies({page: 1}));
  }, []);

  return (
    <MainTemplate
      header={<MainMenu />}
      sidebar={<PopularSidebar />}
      footer={<Footer />}
    >
      <PopularContent />
      <PageSelector totalPages={totalPages} onPageChange={(page) => dispatch(getMovies({page}))} />
    </MainTemplate>
  );
}
