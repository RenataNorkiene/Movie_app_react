import React from "react";
import "./App.css";

const Movie = ({title, year, img}) => {
  return (
    <article className='movie'>
        <h1 className='title'>{title}</h1>
        <img className='img' src={img} alt=''/>
        <p className='year'>{year}</p>
    </article>
  );
};

export default Movie;