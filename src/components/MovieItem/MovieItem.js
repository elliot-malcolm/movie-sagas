import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './MovieItem.css'

class MovieItem extends Component {

submitMovieForDetails = () => {
    this.props.dispatch({
        type: 'FETCH_A_MOVIE', payload: this.props.movie.id
    })
    this.routeDetailsPage();
    }

routeDetailsPage = () => {
    this.props.history.push('/details');
}

    render() {
        return (
            <div>
                <h2>{this.props.movie.title}</h2>
                <button onClick={this.routeDetailsPage}><img src={this.props.movie.poster} alt={this.props.movie.title}></img><br></br>(click for more details)</button>
                <br></br>
                {/* {this.props.movie.description} */}
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})

export default withRouter(connect (putReduxStateOnProps)(MovieItem));