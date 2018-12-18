// Code MovieReviews Here
import React from 'react';

const MovieReviews = review => (
  <div className="review-list">
    <div className="review">
        <h2>{review.display_title}</h2>
        <h2>{review.headline}</h2>
    </div>
  </div>
);

export default MovieReviews;
