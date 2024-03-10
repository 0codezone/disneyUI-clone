/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import GlobalAPI from "../services/GlobalAPI";
import MoviesCard from "./MoviesCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const MovieList = ({ genereId }) => {
  const [movies, setMovies] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    const getMovieByGenreId = async (genereId) => {
      try {
        const res = await GlobalAPI.getMovieByGenreId(genereId);
        // console.log(res.data.results);
        setMovies(res.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (genereId) {
      getMovieByGenreId(genereId);
    }
  }, [genereId]);

  // slider scroll treding movies
  const sliderRight = (element) => {
    element.scrollLeft += window.innerWidth - 60;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= window.innerWidth - 60;
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:flex absolute top-[50%] left-0 text-white text-[30px] rounded-full bg-slate-800/45 cursor-pointer z-[5]"
        onClick={() => {
          sliderLeft(elementRef.current);
        }}
      />

      <div
        className="flex py-1 md:py-3 gap-2 md:gap-4 w-full overflow-x-auto scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movies.map((movies, index) => {
          return <MoviesCard key={index} movies={movies} />;
        })}
      </div>

      <HiChevronRight
        className="hidden md:flex absolute  top-[50%] right-0 text-white text-[30px] rounded-full bg-slate-400/50 cursor-pointer z-[5]"
        onClick={() => {
          sliderRight(elementRef.current);
        }}
      />
    </div>
  );
};

export default MovieList;
