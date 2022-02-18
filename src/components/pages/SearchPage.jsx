import React from "react";

import MainTemplate from "../templates/MainTemplate";
import MainMenu from "../organisms/MainMenu";
import SearchSidebar from "../organisms/SearchSidebar";
import SearchContent from "../organisms/SearchContent";
import Footer from "../organisms/Footer";

export default function SearchPage() {
  return (
    <MainTemplate
      header={<MainMenu />}
      sidebar={<SearchSidebar/>}
      content={<SearchContent/>}
      footer={<Footer />}
    />
  );
}
