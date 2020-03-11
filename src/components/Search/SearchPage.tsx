import React, { useState, useRef, ReactElement } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { TABS } from "../../utils/constants";
import { searchMovies, searchShows } from "../../api/api";

interface Props {}

export default function SearchPage({}: Props): ReactElement {
  const [activeTab, setActiveTab] = useState(TABS.SHOWS);
  const tabRef = useRef<number>(activeTab);
  tabRef.current = activeTab;

  const [data, setData] = useState([]);

  const handleSearch = async (searchTerm: string) => {
    let response;
    if (tabRef.current === TABS.MOVIES) {
      response = await searchMovies(searchTerm);
    }
    if (tabRef.current === TABS.SHOWS) {
      response = await searchShows(searchTerm);
    }
    const list = prepareList(response?.data?.results);
    setData(list);
  };

  return (
    <>
      <NavBar setActiveTab={setActiveTab} />
      <SearchBar activeTab={activeTab} handleSearch={handleSearch} />
      <SearchResults data={data} />
    </>
  );
}

const prepareList = (list: any) => {
  return list.map((item: any) => {
    return {
      title: item.original_name ?? item.original_title,
      img: item.poster_path,
      overview: item.overview,
      id: item.id
    };
  });
};
