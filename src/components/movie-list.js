import React from 'react';
import Movie from '../components/movie.js';

const MovieList = ({movies}) => (
 <div className="movie-list__wrapper">
    {movies && movies.length > 0 ? (
      movies.map(movie => 
        <Movie info={movie} key={movie.id} />
      )
    ) : (
      <h1 className="movie-list__empty">No Movies to Show</h1>
    )}
  </div>
);

export default MovieList;
