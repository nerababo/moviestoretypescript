import React, { useState, useRef, ReactElement } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { TABS } from "../../utils/constants";
import {
  searchMovies,
  searchShows,
  getTopMovies,
  getTopShows
} from "../../api/api";

interface Props {}

export default function SearchPage(): ReactElement {
  const [activeTab, setActiveTab] = useState(TABS.SHOWS);
  const tabRef = useRef<number>(activeTab);
  tabRef.current = activeTab;

  const [data, setData] = useState([]);

  const getData = async (searchTerm: string) => {
    if (!searchTerm || searchTerm.length < 3) {
      fetchDefault();
    }

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

  const fetchDefault = async () => {
    let response;
    if (tabRef.current === TABS.MOVIES) {
      response = await getTopMovies();
    }
    if (tabRef.current === TABS.SHOWS) {
      response = await getTopShows();
    }
    const list = prepareList(response?.data?.results).slice(0, 10);
    setData(list);
    console.log(list);
  };

  return (
    <>
      <NavBar setActiveTab={setActiveTab} />
      <SearchBar activeTab={activeTab} handleSearch={getData} />
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
      id: item.id,
      type: item.type
    };
  });
};
