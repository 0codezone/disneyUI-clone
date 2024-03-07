/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import GlobalAPI from "../services/GlobalAPI";
import { useState } from "react";
const ImageBaseUrl = "https://image.tmdb.org/t/p/original";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Slider = () => {
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const [movieData, setMovieData] = useState([]);

  const elementRef = useRef();

  //get movies from apo
  const getTrendingMovies = async () => {
    try {
      GlobalAPI.getTrendingVideos.then((response) => {
        const data = response.data.results;
        setMovieData(data);
        // console.log(data);
      });
    } catch (error) {
      console.log("fetch api error ", error);
    }
  };

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
        className="hidden md:flex absolute top-[50%] left-12 text-white text-[30px] rounded-full bg-slate-400/50 cursor-pointer"
        onClick={() => {
          sliderLeft(elementRef.current);
        }}
      />
      <HiChevronRight
        className="hidden md:flex absolute  top-[50%] right-12 text-white text-[30px] rounded-full bg-slate-400/50 cursor-pointer"
        onClick={() => {
          sliderRight(elementRef.current);
        }}
      />
      <div
        className="flex gap-5 px-5 md:px-10 py-5 overflow-x-auto scrollbar-none scroll-smooth  "
        ref={elementRef}
      >
        {movieData.map((movie, index) => {
          return (
            <img
              key={index}
              src={ImageBaseUrl + movie.backdrop_path}
              alt={movie.title}
              className="min-w-full h-[200px] md:h-[400px] object-left-top object-cover rounded-md hover:border-[4px]  border-gray-400 transition-all duration-200 ease-in"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
