import { axiosWrapper } from "./axios";

export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const getTopMovies = () => {
  return axiosWrapper.get(
    `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const getTopShows = () => {
  return axiosWrapper.get(
    `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const searchMovies = (value: string) => {
  return axiosWrapper.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&language=en-US&page=1&include_adult=false`
  );
};

export const searchShows = (value: string) => {
  return axiosWrapper.get(
    `/search/tv?api_key=${API_KEY}&language=en-US&query=${value}&page=1`
  );
};

export const getMovieDetails = () => {
  //
};

export const getShowDetails = () => {
  //
};
