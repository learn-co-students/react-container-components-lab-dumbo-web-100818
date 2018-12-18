import React, { Component } from 'react';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state={
    searchTerm: 'all'
  }

  handleChange = (e) => {
    // e.preventDefault()
    this.setState({
      searchTerm: e.target.value
    })
  }

  render (){
    return(
      <div className = "searchable-movie-reviews">
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state.searchTerm)} >
          <input onChange={this.handleChange} placeholder="Search for titlte"/>
          <button > submit</button>
        </form>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
