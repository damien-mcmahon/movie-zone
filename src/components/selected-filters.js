import React from 'react';

const SelectedFilters = ({filters, onRemoveFilter}) => (
  <div className="selected-filters__wrapper">
    <h2 className="selected-filters__title">Filtering Genre{filters.length !== 1 && 's'}</h2>

    <div className="selected-filters__filter-wrapper">
      {filters.map(selected => (
        <span className="selected-filters__filter" key={selected.name}>
          {selected.name}

          <button className="selected-filters__button" onClick={() => onRemoveFilter(selected)}>X</button>
        </span>
      ))}
    </div>
 </div> 
);

export default SelectedFilters;
