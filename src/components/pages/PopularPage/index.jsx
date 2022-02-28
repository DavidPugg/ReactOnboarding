import React, { useEffect, useState } from "react";

import MainTemplate from "@components/templates/MainTemplate/MainTemplate";
import MainMenu from "@components/organisms/MainMenu/MainMenu";
import PopularSidebar from "../../organisms/PopularSidebar";
import PopularContent from "../../organisms/PopularContent";
import Footer from "@components/organisms/Footer/Footer";
import MainButton from '@components/atoms/MainButton'

import { useDispatch } from "react-redux";
import { getMovies, loadMore} from "@src/app/moviesSlice";

export default function PopularPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getMovies({page: currentPage}));
  }, []);

  function handleLoadMore(page) {
    dispatch(loadMore({page}))
    setCurrentPage(currentPage + 1);
  }

  return (
    <MainTemplate
      header={<MainMenu />}
      sidebar={<PopularSidebar />}
      footer={<Footer />}
    >
      <PopularContent />
      <MainButton label="Load More" updated onClick={() => handleLoadMore(currentPage + 1)}/>
    </MainTemplate>
  );
}
