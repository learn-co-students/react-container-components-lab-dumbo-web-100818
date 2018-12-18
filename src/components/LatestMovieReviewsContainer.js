import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';


const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

  state={
    reviews: [],
    searchReviews: []
  }

  componentDidMount = () => {
    console.log('DID MOUNT');
    fetch(URL)
    .then(res => res.json())
    .then(json => {
      this.setState({
        reviews: json.results,
        searchReviews: json.results

      })
    })
  }

  handleSubmit = (e, searchTerm) => {
    e.preventDefault()
    const searchReviews = this.state.reviews.filter(review => review.headline.includes(searchTerm))
    this.setState({
      searchReviews: searchReviews
    })
  }

  render (){
    const reviews = this.state.searchReviews.map((review, idx)=> <MovieReviews key={idx} review={review}/>)

    return(
    <div className="latest-movie-reviews">
      <SearchableMovieReviewsContainer handleSubmit={this.handleSubmit}/>
      {reviews}
    </div>
    )
  }
}

export default LatestMovieReviewsContainer
