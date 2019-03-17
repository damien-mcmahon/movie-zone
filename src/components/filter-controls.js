import React, { useState } from 'react';

import Rating from '../components/ratings';

const FilterControls = ({
  genres, 
  onAddGenre, 
  onClearRating, 
  onRemoveGenre, 
  onSetRating, 
  rating,
  selectedGenres, 
}) => {
    const [{showFilters}, setState] = useState({showFilters: false});

    return (
    <div className="filter-controls__wrapper">
      <button className="filter-controls__toggle-options" onClick={() => setState({showFilters: ! showFilters})}>
      MENU
      </button>
      {selectedGenres.length > 0 &&
        <div className="filter-control__set-filters">
          <h2>Showing Films with the genre of </h2>

          {selectedGenres.map(selected => (
            <span className="filter-controls__filter">
              {selected.name}

              <button 
                key={selected.name}
                onClick={() => onRemoveGenre(selected)} 
                className="filter-controls__selected-genre">
                X
              </button>
            </span>
          ))}
       </div> 
      }

      {rating &&
        <div className="filter-control__rating-wrapper">
          <h2>Showing films with a rating of {rating} or more</h2>
        </div>
      }

      {showFilters &&
        <div className="filter-controls__add-filters">
          <div className="filter-controls__genre-filters">
            <h3>Genres</h3>
            {genres.map(({name, id}) => (
              <div key={name} className="filter-controls__genre">
                <label htmlFor={name}>
                  <input type="checkbox" id={name} onClick={() => onAddGenre({name, id})} />
                  {name}
                </label>
              </div>
            ))}
          </div>

          <div className="filter-controls__rating-filter">
            <h3>Rating</h3>
            <Rating
              currentRating={rating}
              onClearRating={onClearRating}
              onSetRating={onSetRating} />
          </div>
        </div>
      }
    </div>
  );

}

export default FilterControls;
