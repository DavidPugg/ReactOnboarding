import React from "react";

import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";

import MainMenu from "../../organisms/MainMenu/MainMenu";
import Popular from "../../organisms/Popular/Popular";
import Footer from "../../organisms/Footer/Footer";

export default function HomePage() {
  return (
    <HomeTemplate
      header={<MainMenu />}
      content={<Popular />}
      footer={<Footer />}
    />
  );
}
