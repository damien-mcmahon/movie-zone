import { connect } from 'react-redux';
import App from './index.js';
import { GET } from '../api';
import { 
  addSelectedGenre, 
  clearRating,
  dataReceivedSuccess, 
  dataReceivedError, 
  removeSelectedGenre,
  setRatingFilter
} from './actions';
import { selectableGenres, selectedMovies } from './selector';

const mapStateToProps = state => ({
  genres: selectableGenres(state),
  movies: selectedMovies(state), 
  selectedGenres: state.selectedGenres,
  ratingFilter: state.ratingFilter,
});

const mapDispatchToProps = dispatch => ({
  getData: async() => {
    //I'm going to fetch data here, normally I would use redux-observable but it's just a simple app...
    try {
      const config = await GET('configuration');
      const { results:movies } = await GET('movie/now_playing');
      const { genres } = await GET('genre/movie/list');
      
      dispatch(dataReceivedSuccess(movies, genres, config));
    } catch (err) {
      dispatch(dataReceivedError(err));
    }
  },
  addSelectedGenre(genre) {
    dispatch(addSelectedGenre(genre));
  },

  removeSelectedGenre(genre) {
    dispatch(removeSelectedGenre(genre));
  },

  setRatingFilter(rating) {
    dispatch(setRatingFilter(rating));
  },

  clearRating() {
    dispatch(clearRating());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
