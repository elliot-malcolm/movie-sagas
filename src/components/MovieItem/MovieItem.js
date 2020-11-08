import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductListItem extends Component {

    render() {
        return (
            <p>
                <h1>{this.props.movie.title}</h1>
                <br></br>
                <img src={this.props.movie.poster}></img> 
                <br></br>
                {this.props.movie.description}
            </p>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})

export default connect(putReduxStateOnProps)(ProductListItem);