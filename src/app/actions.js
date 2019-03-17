export const DATA_RECEIVED = 'DATA_RECEIVED';
export const DATA_RECEIVED_ERROR = 'DATA_RECEIVED_ERROR';
export const REMOVE_GENRE = 'REMOVE_GENRE';
export const ADD_GENRE = 'ADD_GENRE';
export const SET_RATING = 'SET_RATING';
export const CLEAR_RATING = 'CLEAR_RATING';

export const setRatingFilter = rating => ({
  type: SET_RATING,
  payload: {
    rating
  }
});

export const clearRating = () => ({
  type: CLEAR_RATING
});

export const addSelectedGenre = genre => ({
  type: ADD_GENRE,
  payload: {
    genre
  }
});

export const removeSelectedGenre = genre => ({
  type: REMOVE_GENRE,
  payload: {
    genre
  }
});

export const dataReceivedSuccess = (movies, genreList, config) => ({
  type: DATA_RECEIVED, 
  payload: {
    movies,
    genreList,
    config
  }
});

export const dataReceivedError = err => ({
  type: DATA_RECEIVED_ERROR,
  payload: {
    err
  }
});
