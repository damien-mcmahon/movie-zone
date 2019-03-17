const DEFAULT_STATE = {
  movies: [],
  genres: [],
  selectedGenres: [],
  ratingFilter: null
};

const AppReducer = (state = DEFAULT_STATE, action) => {
  switch(action) {
    default: 
      return state;
  }
}

export default AppReducer;
