import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

  state={
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(rev =>{
      this.setState({reviews: rev.results})
    })
  }

  render() {
    //console.log(this.state);
      let allReviews = this.state.reviews.map((eachRev,idx)=>{
        return <MovieReviews review={eachRev} key={idx}/>
      })
    return (
      <div className="latest-movie-reviews">
          {allReviews}
      </div>
    );
  }

}

export default LatestMovieReviewsContainer;
