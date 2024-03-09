/* eslint-disable react/prop-types */
const ImageBaseUrl = "https://image.tmdb.org/t/p/original";

const MoviesCard = ({ movies }) => {
  return (
    <>
      <img
        className="rounded-lg min-w-[140px] md:min-w-[240px]  object-cover object-left-top cursor-pointer hover:border-[2px] hover:scale-105 transition-all duration-300 ease-in-out"
        src={ImageBaseUrl + movies.poster_path}
        alt="/"
      />
    </>
  );
};

export default MoviesCard;
