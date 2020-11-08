import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem'

class HomeListPage extends Component {

displayMovies(){
    this.props.dispatch({
        type: 'FETCH_MOVIES'})
}

componentDidMount(){
    this.displayMovies();
}

    render() {
      return (
        <>  
        {this.props.reduxState.movies.map((movie) => {
            return (
                <MovieItem key={movie.id} movie={movie}/>
            )
        })}



        {/* {JSON.stringify(this.props.reduxState)} */}
        </>
      );
    };
  };

  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(HomeListPage);