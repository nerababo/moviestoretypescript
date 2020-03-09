import React from "react";
import useDataApi from "./api/useDataApi";
import SearchResult from "./components/SearchResult";
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";
import ShowList from "./components/ShowList";

function App() {
  const { data, isLoading, isError, setUrl } = useDataApi();
  const onSubmitHandler = (inputValue: string) => {
    setUrl(
      `https://api.themoviedb.org/3/search/multi?api_key=482d929cb4907d666170f441baa7bd20&language=en-US&query=${inputValue}&page=1&include_adult=false`
    );
  };

  return (
    <div>
      <h2>Search results</h2>
      <SearchForm onSubmit={onSubmitHandler} />
      {isError && <div>Something went wrong...halp!</div>}
      {isLoading ? <div>Loading...pls wait</div> : <SearchResult data={data} />}
      {isLoading ? <div>Loading...pls wait</div> : <MovieList />}
      <ShowList />
    </div>
  );
}

export default App;
