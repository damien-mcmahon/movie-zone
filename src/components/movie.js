import React from 'react';

//assign a class based on the rating 0-2 bad/3-5 poor/6-8 good/9-10 great
const ratingBg = rating => {
  let ratingClass;

  if (rating <= 2) {
    ratingClass = 'bad';
  }

  if (rating > 2 && rating <= 4) {
    ratingClass = 'poor'; 
  }

  if (rating > 4 && rating <= 6) {
    ratingClass = 'ok';
  }

  if (rating > 6 && rating <= 8) {
    ratingClass = 'good';
  }

  if (rating > 8) {
    ratingClass = 'great';
  }

  return ratingClass;
}

const Movie = ({info}) => (
  <div key={info.id} className="movie__wrapper">
    <img 
      className="movie__poster"
      src={info.fullPosterPath} alt={`Movie Poster for ${info.title}`} />

    <h1 className="movie__title">{info.title}</h1>

    <p className={`movie__rating --${ratingBg(info.vote_average)}`}>{info.vote_average}</p>
  </div>
);

export default Movie;
