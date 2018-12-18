// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      <div className='review'>
        <h3>{props.review.headline}</h3>
        <p>  {props.review.summary_short} </p>
      </div>
    </div>
  )
}

export default MovieReviews
