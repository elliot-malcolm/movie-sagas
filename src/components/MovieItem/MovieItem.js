import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './MovieItem.css'

class MovieItem extends Component {

// route = () =>{
//     this.routeDetailsPage();
// }

// submitMovieForDetails = () => {
//     //notate movie to GET info for // pass idParam 
//     this.routeDetailsPage();
// }

routeDetailsPage = () => {
    this.props.history.push('/details');
}

    render() {
        return (
            <div>
                <h2>{this.props.movie.title}</h2>
                <button onClick={this.routeDetailsPage}><img src={this.props.movie.poster}></img><br></br>(click me to see more details!)</button>
                <br></br>
                {this.props.movie.description}
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})

export default withRouter(connect (putReduxStateOnProps)(MovieItem));