import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import "./App.css";

const App = () => {
  
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('searchValue');

  useEffect(() => {
  getMovies(searchValue);  
  }, [query]);


  const getMovies = async (searchValue) => {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=bd6ac439`);
      const data = await response.json();
    
      if(data.Search) {setMovies(data.Search)};

 }

 const updateSearch = e =>{
   setSearchValue(e.target.value)
   console.log(searchValue);
 };

 const getSearch = e => {
   e.preventDefault();
   setQuery(searchValue);
 }

  return (

    <div className="App">
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
        className="search-bar"
        type="text"
        value={searchValue}
        onChange={updateSearch}
        />
        <button className="search-button" type="submit">Submit</button>
      </form>
    </div>
      
      {movies.map((movie, index) => (
      
        <Movie
        key={index}
        title={movie.Title}
        year ={movie.Year}
        director={movie.Director}
        runTime={movie.Runtime}
        img = {movie.Poster}
        />
      ))}
      
    </div>
    
  );
};
   
export default App;
