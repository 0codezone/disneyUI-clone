import GenreList from "../Constant/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div className="px-5 md:px-10 py-5 ">
      {GenreList.genere.map((genere, index) => {
        return (
          index <= 5 && (
            <div key={index} className="py-2 md:py-5 ">
              <h1 className="text-[20px] font-bold">{genere.name}</h1>
              <MovieList genereId={genere.id} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default GenreMovieList;
