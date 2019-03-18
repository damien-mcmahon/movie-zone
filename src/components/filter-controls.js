import React, { useState } from 'react';

import SelectedFilters from '../components/selected-filters';
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

      {showFilters &&
        <div className={`filter-controls__add-filters --${showFilters ? 'open' : 'closed'}`}>
          <div className="filter-controls__genre-filters">
            <h3 className="filter-controls__section-header">Genres</h3>

            <div className="filter-controls__inputs-wrapper">
              {genres.map(({name, id}) => (
                <div key={name} className="filter-controls__genre">
                  <label htmlFor={name}>
                    <input className="filter-controls__genre-checkbox" type="checkbox" id={name} onClick={() => onAddGenre({name, id})} />
                    {name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="filter-controls__rating-filter">
            <h3 className="filter-controls__section-header">Rating</h3>
            <Rating
              currentRating={rating}
              onClearRating={onClearRating}
              onSetRating={onSetRating} />
          </div>
        </div>
      }

      <div className="filter-controls__info-wrapper">
        {selectedGenres.length > 0 &&
          <div className="filter-controls__set-filters">
            <SelectedFilters filters={selectedGenres} onRemoveFilter={onRemoveGenre} />
         </div> 
        }

        {rating &&
          <div className="filter-controls__rating-wrapper">
            <h2 className="filter-controls__rating-title">Filtering Ratings:</h2>
            <span className="filter-controls__rating">{rating} +</span>
          </div>
        }
      </div>
    </div>
  );

}

export default FilterControls;
