import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?`
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {



  state={
    reviews: [],
    searchTerm: ''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit=(e,term)=>{
    e.preventDefault()
    fetch(URL)
    .then(res => res.json())
    .then(results =>{
      this.setState({
        reviews: results.results
      })
    })
  }

  render() {

    return (
      <div className="searchable-movie-reviews">
          <form onSubmit={(e)=>this.handleSubmit(e,this.state.searchTerm)}>
            <input type="text" value={this.state.searchTerm} name="searchTerm" onChange={this.handleChange}></input>
            <input type="submit" name="submit"></input>
          </form>
          // {this.state.reviews.map((eachRev,idx) => { return <MovieReviews review={eachRev} key={idx}/>})}
           { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
      </div>
    );
  }

}

export default SearchableMovieReviewsContainer;
