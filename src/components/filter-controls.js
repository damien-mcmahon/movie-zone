import React from 'react';

const FilterControls = ({onAddGenre, genres, onRemoveGenre, selectedGenres, ratingFilter}) => (
  <div className="filter-controls__wrapper">
    {selectedGenres.length > 0 &&
      <div className="filter-control__set-filters">
        <h2>Showing Films with the genre of </h2>
        {selectedGenres.map(selected => (
          <button 
            key={selected.name}
            onClick={() => onRemoveGenre(selected)} 
            className="filter-controls__selected-genre">
            {selected.name}
          </button>
        ))}
     </div> 
    }
    <div className="filter-controls__add-filters">
      {genres.map(({name, id}) => (
        <div key={name} className="filter-controls__genre">
          <label htmlFor={name}>
            <input type="checkbox" id={name} onClick={() => onAddGenre({name, id})} />
            {name}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default FilterControls;
