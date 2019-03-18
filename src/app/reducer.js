import {
  DATA_RECEIVED,
  ADD_GENRE,
  REMOVE_GENRE,
  SET_RATING,
  CLEAR_RATING,
} from './actions';

const DEFAULT_STATE = {
  movies: [],
  genres: [],
  selectedGenres: [],
  ratingFilter: null
};

const AppReducer = (state = DEFAULT_STATE, action) => {
  const { payload } = action;

  switch(action.type) {
    case ADD_GENRE:
      return {
        ...state,
        selectedGenres: [...state.selectedGenres, payload.genre]
      }; 

    case REMOVE_GENRE: 
      return {
        ...state,
        selectedGenres: state.selectedGenres.filter(selected => selected.id !== payload.genre.id)
      };

    case SET_RATING: 
      return {
      ...state,
      ratingFilter: payload.rating
    }

    case CLEAR_RATING: 
      return {
        ...state,
        ratingFilter: null
    };

    case DATA_RECEIVED: 
      const { payload: { movies, genreList, config }} = action;
      const posterInfo = {
        basePath: config.images.base_url,
        posterSize:config.images.poster_sizes[4],
      };

      let selectableGenres = new Set();
      //loop over the movies and do some transformations...
        movies.forEach(movie => {
          //create the path for the poster
          movie.fullPosterPath = `${posterInfo.basePath}${posterInfo.posterSize}${movie.poster_path}`;

          movie.genre_ids.forEach(gId => {
            const genre = genreList.find(g => g.id === gId);
            selectableGenres.add(genre);
          });
        });

        //turn the Set into an array
        const genres = Array.from(selectableGenres);
        
        //alphabetise the genres
        genres.sort((genA, genB) => {
          const { name: nameA } = genA;
          const { name: nameB} = genB;

          return nameA < nameB ? -1 : 1;
        });

        return {
          ...state,
          movies,
          genres
        };

    default: 
      return state;
  }
}

export default AppReducer;
