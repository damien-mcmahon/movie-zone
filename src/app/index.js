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
    const { 
      addSelectedGenre, 
      clearRating, 
      genres, 
      movies, 
      ratingFilter,
      removeSelectedGenre, 
      selectedGenres, 
      setRatingFilter 
    } = props;

    return (
      <div className="app__wrapper">
        <header className="app__header">
          <h1 className="app__title">Movie Zone</h1>
        </header>

        <FilterControls 
          onAddGenre={genre => addSelectedGenre(genre)}
          onRemoveGenre={genre => removeSelectedGenre(genre)}
          onSetRating={rating => setRatingFilter(rating)}
          onClearRating={() => clearRating()}
          genres={genres} 
          rating={ratingFilter}
          selectedGenres={selectedGenres}/>

        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
