import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {

    render() {
      return (
        <>  
        <p>{JSON.stringify(this.props.reduxState.selectedMovie)}</p>
        </>
      );
    };
  };

  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(DetailsPage);