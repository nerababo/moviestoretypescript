import axios from "axios";

export const axiosWrapper = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

// note: trailer : http://api.themoviedb.org/3/movie/157336?api_key=###&append_to_response=videos
// https://www.themoviedb.org/talk/5451ec02c3a3680245005e3c?language=en-US
