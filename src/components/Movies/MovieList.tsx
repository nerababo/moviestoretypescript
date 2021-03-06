/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useDataApi from "../../api/useDataApi";

interface Data {
  url: string | undefined;
  original_title: string;
  poster_path: string;
  id: string;
  overview: string;
}

interface ListData {
  data: {
    results: Array<Data>;
  };
}

const MovieList: React.FC<ListData | any> = () => {
  const imageLink = "https://image.tmdb.org/t/p/w500";
  const { data, setUrl } = useDataApi();
  useEffect(() => {
    setUrl(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=482d929cb4907d666170f441baa7bd20&language=en-US&page=1`
    );
  }, []);

  if (data && data.results) {
    return data.results.slice(10).map((hit: Data) => (
      <div key={hit.id}>
        <img
          src={`${imageLink}${hit.poster_path}`}
          alt="imagename"
          title={hit.original_title}
        />
        <h5>{hit.original_title}</h5>
      </div>
    ));
  } else return null;
};

export default MovieList;
