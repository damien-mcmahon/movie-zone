import React from 'react';

const createRange = (size) => Array(size).fill().map((_,i) => i + 1); 

const Ratings = ({currentRating, onSetRating, onClearRating, range}) => (
  <div className="ratings__wrapper">
    {createRange(range).map(index => (
      <div key={index} className="ratings__rating">
        <label htmlFor={index}>
          <input type="radio" onChange={() => onSetRating(index)} name="rating" id={index}/>
          {index}
        </label>
      </div>
    ))}

    {currentRating &&
      <button 
        className="ratings__clear-rating" 
        onClick={() => onClearRating()}>
        Clear
      </button>
    }
  </div>
);

Ratings.defaultProps = {
  range: 10
};

export default Ratings;
