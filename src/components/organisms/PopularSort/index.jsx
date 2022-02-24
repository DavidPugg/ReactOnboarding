import React, { useContext, useState } from "react";

import { Appcontext } from "../../pages/PopularPage/context";

import SidebarItem from "../../molecules/SidebarItem";
import MainLanguageOption from "@components/atoms/MainLanguageOption/MainLanguageOption";
import UniversalDropdown from "@components/atoms/UniversalDropdown";
import LanguageOption from "../../atoms/LanguageOption/LanguageOption";

import sortItems from "./sort";

export default function PopularSort() {
  const [dropdown, setDropdown] = useState(false);
  const { sort, updateSort } = useContext(Appcontext);

  return (
    <SidebarItem label="Sort">
      <p>Sort results by</p>
      <MainLanguageOption
        label={sortItems.find((e) => e.sort == sort).label}
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
          {sortItems.filter((e) => e.sort !== sort).map(({ label, sort }) => (
            <LanguageOption key={sort} label={label} onClick={() => {updateSort(sort); setDropdown(false)}} />
          ))}
        </UniversalDropdown>
      )}
    </SidebarItem>
  );
}
