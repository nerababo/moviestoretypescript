import React from "react";
// import useDataApi from "./api/useDataApi";
// import SearchResult from "./components/Search/SearchResult";
// import SearchForm from "./components/Search/SearchForm";
// import MovieList from "./components/Movies/MovieList";
// import ShowList from "./components/Shows/ShowList";
import Main from "./components/Main";
function App() {
  // const { data, isLoading, isError, setUrl } = useDataApi();
  // const onSubmitHandler = (inputValue: string) => {
  //   setUrl(
  //     `https://api.themoviedb.org/3/search/multi?api_key=482d929cb4907d666170f441baa7bd20&language=en-US&query=${inputValue}&page=1&include_adult=false`
  //   );
  // };

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
