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
        <ul>
            {this.props.reduxState.movies.map((movie) => {
                return (
                    <li className='movieItem' key={movie.id}><MovieItem movie={movie}/></li>
                )
            })}
        </ul>
        <button onClick={this.addMovie}>Add A Movie!</button>



        {/* {JSON.stringify(this.props.reduxState)} */}
        </>
      );
    };
  };

  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(HomeListPage);