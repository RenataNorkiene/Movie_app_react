import React from "react";

const Movie = ({key, title, year, director, runTime, img}) => {
  return (
    <div>
        <p>{key}</p>
        <h1>{title}</h1>
        <p>{year}</p>
        <p>{director}</p>
        <p>{runTime}</p>
        <img src={img}/>
    </div>
  );
};

export default Movie;