import { connect } from 'react-redux';
import App from './index.js';
import { GET } from '../api';
import { dataReceivedSuccess, dataReceivedError } from './actions';

const mapStateToProps = state => ({});

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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
