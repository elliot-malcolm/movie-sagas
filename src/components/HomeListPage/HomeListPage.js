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

addMovie = () => {
    this.props.history.push('/addmovie');
}

    render() {
      return (
        <>  
        <div className="movieItem">
            {this.props.reduxState.movies.map((movie) => {
                return (
                    <li className='movieItem' key={movie.id}><MovieItem movie={movie}/></li>
                )
            })}
        </div>
        <button onClick={this.addMovie}>Add A Movie!</button>
        </>
      );
    };
  };

  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(HomeListPage);