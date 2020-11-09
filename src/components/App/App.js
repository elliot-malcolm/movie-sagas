import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import HomeListPage from '../HomeListPage/HomeListPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import AddMoviePage from '../AddMovieForm/AddMovieForm';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        {/* <HomeListPage/> */}
        <Router>
          <Route exact path="/" component={HomeListPage}/>
          <Route path="/details" component={DetailsPage}/>
          <Route path="/addmovie" component={AddMoviePage}/>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(App);
