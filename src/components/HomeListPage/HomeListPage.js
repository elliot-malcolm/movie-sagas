import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeListPage extends Component {

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
  
  export default connect(mapStateToProps)(HomeListPage);