import React, { useState } from "react";

import { setSort } from "../../../app/sortSlice";
import { useDispatch, useSelector } from "react-redux";

import SidebarItem from "../../molecules/SidebarItem";
import MainLanguageOption from "@components/atoms/MainLanguageOption/MainLanguageOption";
import UniversalDropdown from "@components/atoms/UniversalDropdown";
import LanguageOption from "../../atoms/LanguageOption/LanguageOption";

import sortItems from "./sort";

export default function PopularSort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.sort.value)
  const [dropdown, setDropdown] = useState(false);



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
            <LanguageOption key={sort} label={label} onClick={() => {dispatch(setSort(sort)); setDropdown(false)}} />
          ))}
        </UniversalDropdown>
      )}
    </SidebarItem>
  );
}