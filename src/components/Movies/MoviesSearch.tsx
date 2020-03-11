import React from "react";
import useDataApi from "../../api/useDataApi";
import SearchResult from "../Search/OLD_SearchResult";
import SearchForm from "../Search/OLD_SearchForm";

function MoviesSearch() {
  const { data, isLoading, isError, setUrl } = useDataApi();
  const onSubmitHandler = (inputValue: string) => {
    setUrl(
      `https://api.themoviedb.org/3/search/movie?api_key=482d929cb4907d666170f441baa7bd20&language=en-US&query=${inputValue}&page=1&include_adult=false`
    );
  };

  return (
    <div>
      <h2>Search results</h2>
      <SearchForm onSubmit={onSubmitHandler} />
      {isError && <div>Something went wrong...halp!</div>}
      {isLoading ? <div>Loading...pls wait</div> : <SearchResult data={data} />}
    </div>
  );
}

export default MoviesSearch;
