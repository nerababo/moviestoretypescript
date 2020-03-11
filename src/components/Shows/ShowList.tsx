/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useDataApi from "../../api/useDataApi";
import "../styles.css";

interface Data {
  url: string | undefined;
  original_name: string;
  poster_path: string;
  id: string;
  overview: string;
}

interface ListData {
  data: {
    results: Array<Data>;
  };
}

const ShowList: React.FC<ListData | any> = () => {
  const imageLink = "https://image.tmdb.org/t/p/w500";
  const { data, setUrl } = useDataApi();
  useEffect(() => {
    setUrl(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=482d929cb4907d666170f441baa7bd20&language=en-US&page=1`
    );
  }, []);

  if (data && data.results) {
    return data.results.slice(0, 10).map((movie: Data) => (
      <div key={movie.id} className="container">
        <img
          src={`${imageLink}${movie.poster_path}`}
          alt="imagename"
          title={movie.original_name}
          className="picture"
        />
        <h5 className="title">{movie.original_name}</h5>
      </div>
    ));
  } else return null;
};
export default ShowList;
