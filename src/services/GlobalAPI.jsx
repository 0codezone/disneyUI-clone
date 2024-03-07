import axios from "axios";

const moviesbaseUrl = "https://api.themoviedb.org/3";
const apiKey = "fe0ff1ac1022b113d763ad29e376554a";

const getTrendingVideos = axios.get(
  `${moviesbaseUrl}/trending/all/day?api_key=${apiKey}`
);

export default { getTrendingVideos };
