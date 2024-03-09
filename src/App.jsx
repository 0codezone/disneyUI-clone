/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Productionhouse from "./components/Productionhouse";
import GenreMovieList from "./components/GenreMovieList";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Productionhouse />
      <GenreMovieList />
    </div>
  );
};

export default App;
