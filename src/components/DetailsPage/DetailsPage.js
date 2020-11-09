import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {

    render() {
      return (
        <div>  
            {this.props.reduxState.selectedMovie[0] &&
            <h2>{this.props.reduxState.selectedMovie[0].title}</h2>}
            {this.props.reduxState.selectedMovie[0] &&
            <img src={this.props.reduxState.selectedMovie[0].poster} alt={this.props.reduxState.selectedMovie[0].title}/>}
            {this.props.reduxState.selectedMovie[0] &&
            <p>{this.props.reduxState.selectedMovie[0].description}</p>}
            <h5>Film Genres:</h5>
            {this.props.reduxState.selectedMovie.map((genre) => {
                return <li key={genre.name}>{genre.name}</li>})}
        </div>
      );
    };
}


  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(DetailsPage);