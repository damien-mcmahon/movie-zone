import { createSelector } from 'reselect';

const getGenres = ({genres}) => genres;
const getMovies = ({movies}) => movies;
const getSelectedGenres = ({selectedGenres}) => selectedGenres;

export const selectedMovies = createSelector(
  [getMovies, getSelectedGenres], 
  (movies, selectedGenres) => {

    //return the list of movies when nothing selected
    if (!selectedGenres.length) {
      return movies;
    }

    //filter movies where one of the genre_ids is found in the list of selectedGenres
    return movies.filter(({genre_ids}) => genre_ids.some(id => {
      return selectedGenres.find(selectedGenre => selectedGenre.id === id);
    }));
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
