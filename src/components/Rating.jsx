import React, { useState } from 'react';
import './Rating.css';

const ratingStyles = {
  width: '30px',
  height: '30px',
  border: '1px solid deeppink',
  marginRight: '10px',
  padding: '10px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

const ratingContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
};

const Rating = () => {
  const [rating, setRating] = useState(null);

  return (
    <>
      <h1>The Rating Component was rendered</h1>
      <div style={ratingContainerStyles}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i + 'r'}
            onClick={() => setRating(i + 1)}
            style={ratingStyles}
            className={i + 1 <= rating ? 'filled' : ''}>
            {i + 1}
          </div>
        ))}
      </div>
    </>
  );
};

export default Rating;
