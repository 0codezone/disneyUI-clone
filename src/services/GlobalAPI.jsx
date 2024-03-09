import axios from "axios";

const moviesbaseUrl = "https://api.themoviedb.org/3";
const apiKey = "fe0ff1ac1022b113d763ad29e376554a";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=fe0ff1ac1022b113d763ad29e376554a";

const getTrendingVideos = axios.get(
  `${moviesbaseUrl}/trending/all/day?api_key=${apiKey}`
);

const getMovieByGenreId = (genereId) => {
  return axios.get(`${movieByGenreBaseURL}&with_genres=${genereId} `);
};

export default { getTrendingVideos, getMovieByGenreId };
