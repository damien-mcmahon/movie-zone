import React from 'react';

const MovieList = ({movies}) => (
 <div className="movie-list__wrapper">
    {movies && movies.length > 0 ? (
      movies.map(movie => (
        <div key={movie.id} className="movie__wrapper">
          <h1>{movie.title}</h1>
          <p>{movie.popularity}</p>
        </div>
      ))
    ) : (
      <h1>No Movies to Show</h1>
    )}
  </div>
);

export default MovieList;
