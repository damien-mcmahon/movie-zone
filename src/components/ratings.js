import React from 'react';

//a method to create a range of numbers 1..x
const createRange = size => Array(size).fill().map((_,i) => i + 1); 

const Ratings = ({currentRating, onSetRating, onClearRating, range}) => (
  <div className="ratings__wrapper">
    <div className="ratings__inputs-wrapper">
      {createRange(range).map(index => (
        <div key={index} className="ratings__rating">
          <label className="ratings__label" htmlFor={index}>
            <input 
              className="ratings__radio"
              type="radio" 
              onChange={() => onSetRating(index)} 
              name="rating" 
              id={index}/>
            {index}
          </label>
        </div>
      ))}
    </div>
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
