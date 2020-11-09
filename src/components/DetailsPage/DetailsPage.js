import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {

    render() {
      return (
        <>  
        <p>details go here!</p>
        </>
      );
    };
  };

  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(DetailsPage);