import React, { ReactElement, useState } from "react";
import SearchShow from "./Shows/SearchShow";
import ShowList from "./Shows/ShowList";
import MovieList from "./Movies/MovieList";
import MovieSearch from "./Movies/MovieSearch";

function ToggleStuff(stuff: number) {
  switch (stuff) {
    case 1:
      return (
        <>
          <SearchShow />
          <ShowList />
        </>
      );
    case 2:
      return (
        <div>
          <MovieSearch />
          <MovieList />
        </div>
      );
    default:
      return (
        <div>
          <SearchShow />
          <ShowList />
        </div>
      );
  }
}

export default function Main(): ReactElement {
  const [stuff, setStuff] = useState();
  return (
    <div>
      <button onClick={() => setStuff(1)}>Shows</button>
      <button onClick={() => setStuff(2)}>Movies</button>
      {ToggleStuff(stuff)}
    </div>
  );
}
