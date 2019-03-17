export const DATA_RECEIVED = 'DATA_RECEIVED';
export const DATA_RECEIVED_ERROR = 'DATA_RECEIVED_ERROR';

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
