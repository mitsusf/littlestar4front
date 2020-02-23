import React, { Component } from 'react';
import { connect } from "react-redux";
import { setSearchField, requestStars } from "../actions";

import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBar from '../components/ScrollBar';
import ErrorBoundary from '../components/ErrorBoundary';

// Takes an STATE, and returns an object
const mapStateToProps = state => {
  return {
    searchField: state.searchStars.searchField,
    stars: state.requestStars.stars,
    isPending: state.requestStars.isPending,
    error: state.requestStars.error
  }
}

// Dispatch is a trigger to send the event changge to reducre
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestStars: () => dispatch(requestStars()) 
  }
}


// In order to use state, App has to be a class.
class App extends Component {

  componentDidMount() {
    this.props.onRequestStars();
  }

  render() {
    const { searchField, onSearchChange, stars, isPending } = this.props;
    const filteredStars = stars.filter((star) => {
      return star.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    });

    if (isPending) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1>Little Stars</h1>
          <SearchBox searchChange={ onSearchChange} />
          <ScrollBar >
              <ErrorBoundary>
                <CardList stars={filteredStars} />
              </ErrorBoundary>
          </ScrollBar>
        </div>
      )
    }  
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect is a higher order function which is a function that returns another function
