import React, { useEffect } from "react";

import MainTemplate from "@components/templates/MainTemplate/MainTemplate";
import MainMenu from "@components/organisms/MainMenu/MainMenu";
import PopularSidebar from "../../organisms/PopularSidebar";
import PopularContent from "../../organisms/PopularContent";
import Footer from "@components/organisms/Footer/Footer";

import { useDispatch } from "react-redux";
import { getMovies } from "@src/app/moviesSlice";

export default function PopularPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <MainTemplate
      header={<MainMenu />}
      sidebar={<PopularSidebar />}
      footer={<Footer />}
    >
      <PopularContent />
    </MainTemplate>
  );
}
