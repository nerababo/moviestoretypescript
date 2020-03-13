import { axiosWrapper } from "./axios";

export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const getTopMovies = () => {
  return axiosWrapper.get(
    `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1&append_to_response=type`
  );
};

export const getTopShows = () => {
  return axiosWrapper.get(
    `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1&append_to_response=type`
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

export const getMovieDetails = (id: string) => {
  return axiosWrapper.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
};

export const getShowDetails = (id: string) => {
  return axiosWrapper.get(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
  );
};
