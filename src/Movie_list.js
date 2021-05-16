import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import "./App.css";

const Movie_list = () => {
  
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('searchValue');

  useEffect(() => {
  getMovies(searchValue);  
  }, [query]);


  const getMovies = async (searchValue) => {
    if(searchValue !== ''){
      const response = await fetch(`https://www.omdbapi.com/?apikey=bd6ac439&s=${searchValue}`);
      const data = await response.json();
        if(data.Search == undefined) {
          alert( "No movie found");
        }
        if(data.Search) {setMovies(data.Search)};
    }
   
 }

 const updateSearch = e =>{
   setSearchValue(e.target.value)
   
 };

 const getSearch = e => {
   e.preventDefault();
   setQuery('');
 }

  return (

    <React.Fragment>
    
      <form onSubmit={getSearch} className="search-form">
        <input
        className="search-bar"
        type="text"
        value={searchValue}
        onChange={updateSearch}
        placeholder="Movie title"
        />
        <button className="search-button" type="submit">Submit</button>
      </form>
    
      <div className="Movie_list">

      {movies.map((movie, index) => (
      
        <Movie
        key={index}
        title={movie.Title}
        year ={movie.Year}
        img = {movie.Poster}
        />
      ))}
       </div>

    </React.Fragment>
    
  );
};
   
export default Movie_list;