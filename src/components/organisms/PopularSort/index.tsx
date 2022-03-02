import MainLanguageOption from "@components/atoms/MainLanguageOption/MainLanguageOption";
import UniversalDropdown from "@components/atoms/UniversalDropdown";
import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setSort } from "../../../app/sortSlice";
import LanguageOption from "../../atoms/LanguageOption/LanguageOption";
import SidebarItem from "../../molecules/SidebarItem";
import {sortItems} from "./sort";

type Sort = {
  sort: string;
  label: string;
};

export default function PopularSort() {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootStateOrAny) => state.sort.value);
  const [dropdown, setDropdown] = useState(false);

  function findLabel() {
    return (sortItems.find((e) => e.sort == sort) as Sort).label
  }

  return (
    <SidebarItem label="Sort">
      <>
        {" "}
        <p>Sort results by</p>
        <MainLanguageOption
          label={findLabel()}
          onClick={() => setDropdown(!dropdown)}
        />
        {dropdown && (
          <UniversalDropdown
            onClickOutside={() => {
              setDropdown(false);
            }}
            style={{
              width: `calc(100% - 1.6rem)`,
              marginTop: `0rem`,
              paddingRight: "0",
              paddingLeft: "0",
            }}
          >
            {sortItems
              .filter((e) => e.sort !== sort)
              .map(({ label, sort }) => (
                <LanguageOption
                  key={sort}
                  label={label}
                  onClick={() => {
                    dispatch(setSort(sort));
                    setDropdown(false);
                  }}
                />
              ))}
          </UniversalDropdown>
        )}
      </>
    </SidebarItem>
  );
}
