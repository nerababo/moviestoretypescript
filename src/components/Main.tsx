import React, { ReactElement, useState } from "react";
import ShowsSearch from "./Shows/ShowsSearch";
import ShowList from "./Shows/ShowList";
import MovieList from "./Movies/MovieList";
import MoviesSearch from "./Movies/MoviesSearch";
import Search from "./Search/OLD_Search";

function renderContent(activeTab: number) {
  // if (activeTab === TABS.SHOWS) return <ShowList />;
  // if (activeTab === TABS.MOVIES) return <MovieList />;
  // switch (activeTab) {
  //   case 1:
  //     return (
  //       <>
  //         <ShowsSearch />
  //         <ShowList />
  //       </>
  //     );
  //   case 2:
  //     return (
  //       <div>
  //         <MoviesSearch />
  //         <MovieList />
  //       </div>
  //     );
  //   default:
  //     return (
  //       <div>
  //         <ShowsSearch />
  //         <ShowList />
  //       </div>
  //     );
  // }
}

export default function Main(): ReactElement {
  // const [activeTab, setActiveTab] = useState(TABS.SHOWS);
  return (
    <div>
      {/* <button onClick={() => setActiveTab(TABS.SHOWS)}>Shows</button>
      <button onClick={() => setActiveTab(TABS.MOVIES)}>Movies</button> */}
      <Search />
      {/* {renderContent(activeTab)} */}
    </div>
  );
}
