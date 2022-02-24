import React, { useState } from "react";

import SidebarItem from "../../molecules/SidebarItem";

import MainLanguageOption from "@components/atoms/MainLanguageOption/MainLanguageOption";
import UniversalDropdown from "@components/atoms/UniversalDropdown";
import LanguageOption from "../../atoms/LanguageOption/LanguageOption";

import sort from "./sort";

export default function PopularSort() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <SidebarItem label="Sort">
      <p>Sort results by</p>
      <MainLanguageOption
        label="Popularity descending"
        onClick={() => setDropdown(!dropdown)}
      />
      {dropdown && (
        <UniversalDropdown
          style={{
            width: `calc(100% - 1.6rem)`,
            marginTop: `0rem`,
            paddingRight: "0",
            paddingLeft: "0",
          }}
        >
          {sort.map(({ label }) => (
            <LanguageOption key={label} label={label} />
          ))}
        </UniversalDropdown>
      )}
    </SidebarItem>
  );
}
