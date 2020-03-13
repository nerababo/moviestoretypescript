import * as React from "react";
import { getTopMovies } from "../../api/api";
import { useState } from "react";
// export interface ITopMoviesProps {
//   data: Array<any>;
// }

export function TopMovies() {
  const imageLink = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState();
  const fetchMovies = async () => {
    try {
      const response = await getTopMovies();
      setMovies(response);
    } catch (e) {
      console.log(e);
      setMovies(e);
    }
  };
  fetchMovies();

  if (movies && movies.results) {
    return movies.results.slice(10, 0).map((items: any) => (
      <div key={items.id}>
        <img
          src={`${imageLink}${items.poster_path}`}
          alt="imagename"
          title={items.original_title}
        />
        <h5>{items.original_title}</h5>
      </div>
    ));
  } else return null;
}
