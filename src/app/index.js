import React, { Component } from 'react';
import MovieList from '../components/movie-list';
import FilterControls from '../components/filter-controls';

class App extends Component {
  constructor(props) {
    super(props);

    const { movies, getData } = props;

    if (!movies.length) {
      getData();
    }
  }

  render() {
    const { props } = this;
    const { addSelectedGenre, genres, movies, removeSelectedGenre, selectedGenres } = props;

    return (
      <div className="App">
      <FilterControls 
        onAddGenre={genre => addSelectedGenre(genre)}
        onRemoveGenre={genre => removeSelectedGenre(genre)}
        genres={genres} 
        selectedGenres={selectedGenres}/>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
