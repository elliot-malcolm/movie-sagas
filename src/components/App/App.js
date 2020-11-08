import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import HomeListPage from '../HomeListPage/HomeListPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import AddMoviePage from '../AddMoviePage/AddMoviePage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <HomeListPage/>
        <Router>
          {/* ADD PAGES! */}
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(App);
