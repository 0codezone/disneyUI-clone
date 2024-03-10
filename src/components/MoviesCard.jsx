/* eslint-disable react/prop-types */
const ImageBaseUrl = "https://image.tmdb.org/t/p/original";
import { useState } from "react";

const MoviesCard = ({ movies }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const closeMe = () => {
    setShowDetails(false);
  };

  return (
    <>
      <img
        onClick={handleShowDetails}
        className="rounded-lg min-w-[140px] md:min-w-[240px]  object-cover object-left-top cursor-pointer hover:border-[2px] hover:scale-105 transition-all duration-300 ease-in-out"
        src={ImageBaseUrl + movies.poster_path}
        alt="/"
      />
      {showDetails && (
        <div className="absolute z-10 p-4 bg-gray-900 text-white shadow-md rounded-md md:flex md:gap-5">
          <span
            onClick={closeMe}
            className="border px-2 bg-red-600 absolute top-2 right-2"
          >
            X
          </span>
          <img
            src={ImageBaseUrl + movies.backdrop_path}
            alt="/"
            className="rounded-md border my-2 md:h-[300px] md:w-[500px] object-cover object-left-top"
          />

          <div>
            <h2 className="text-xl font-bold my-3">{movies.title}</h2>
            <p className="">{movies.overview}</p>
            <p className="text-green-500">
              Release date : {movies.release_date}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesCard;
