import {
  DATA_RECEIVED,
} from './actions';

const DEFAULT_STATE = {
  movies: [],
  genres: [],
  selectedGenres: [],
  ratingFilter: null
};

const AppReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
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
          movie.fullPosterPath = `${posterInfo.basePath}${posterInfo.posterSize}/${movie.poster_path}`;

          movie.genre_ids.forEach(gId => {
            const genre = genreList.find(g => g.id === gId);
            selectableGenres.add(genre);
          });
        });

        //sort the movies into popularity order
        movies.sort((movieA, movieB) => {
          const { popularity: popularityA } = movieA;
          const { popularity: popularityB } = movieB;

          if (popularityA === popularityB) {
            return 0
          }

          return popularityA < popularityB ? 1 : -1;
        });

        //turn the Set into an array
        const genres = Array.from(selectableGenres);

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
