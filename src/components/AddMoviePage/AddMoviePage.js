import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMoviePage extends Component {

    render() {
      return (
        <>  
        
        </>
      );
    };
  };

  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(AddMoviePage);