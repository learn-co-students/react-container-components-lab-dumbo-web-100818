import React from 'react'

const MovieReviews = (props) => {
  return(
    <ul className = "review-list">
    {
      props.reviews.map(review => {return <li key ={review.display_title} className="review">{review.display_title}</li>})
    }
    </ul>

    );
}

export default MovieReviews
