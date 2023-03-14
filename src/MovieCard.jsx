import React from "react";

const MovieCard = ({ movie }) => {
  return (
   
        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>

          <div>
            <img src={movie.Poster} alt={movie.Tittle} />
          </div>
        </div>

  );
};

export default MovieCard;
