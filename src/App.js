import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./components/MovieList.js";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=c4bc58ec"

    const response = await fetch(url);

    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(()=>{
    getMovieRequest();
  }, []);

  return (
      <div className='container-fluid movie-app'>
        <div className='row'>
          <MovieList movies={movies} />
        </div>
      </div>
  );
};

export default App;