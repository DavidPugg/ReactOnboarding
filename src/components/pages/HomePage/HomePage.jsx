import React from "react";
import Footer from "../../organisms/Footer/Footer";
import MainMenu from "../../organisms/MainMenu/MainMenu";
import Popular from "../../organisms/Popular/Popular";
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";



export default function HomePage() {

  return (
    <HomeTemplate header={<MainMenu />} footer={<Footer />}>
      <Popular />
    </HomeTemplate>
  );
}
