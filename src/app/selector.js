import { createSelector } from 'reselect';

const getGenres = ({genres}) => genres;
const getMovies = ({movies}) => movies;
const getSelectedGenres = ({selectedGenres}) => selectedGenres;
const getRating = ({ratingFilter}) => ratingFilter;

export const selectedMovies = createSelector(
  [getMovies, getSelectedGenres, getRating], 
  (movies, selectedGenres, ratingFilter) => {
    
    //sort the movies into popularity order
    movies.sort((movieA, movieB) => {
      const { vote_average: ratingA } = movieA;
      const { vote_average: ratingB } = movieB;

      if (ratingA === ratingB) {
        return 0
      }

      return ratingA < ratingB ? 1 : -1;
    });

    //return the list of movies when nothing selected
    if (!selectedGenres.length && !ratingFilter) {
      return movies;
    }

    let filtered = movies;

    //filter movies where one of the genre_ids is found in the list of selectedGenres
    if (selectedGenres.length) {
      filtered = movies.filter(({genre_ids}) => genre_ids.some(id => {
        return selectedGenres.find(selectedGenre => selectedGenre.id === id);
      }));
    }

    return ratingFilter ? 
      filtered.filter(({vote_average}) =>vote_average >= ratingFilter) : filtered;
  }
);


export const selectableGenres = createSelector(
  [getGenres, getSelectedGenres],
  (genres, selectedGenres) => {
    //if nothing selected return the list
    if (!selectedGenres.length) {
      return genres;
    }

    //return a list of genres that haven't been added to the selectedGenres list
    return genres.filter(genre => !!selectedGenres.every(selected => selected.id !== genre.id));
  }
);
