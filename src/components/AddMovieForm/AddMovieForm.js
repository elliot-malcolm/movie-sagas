import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovieForm extends Component {
// define new movie object
  state = {
    title: '',
    poster: '',
    description: '',
    genre_id: null
}
// mount genres for map and application to "select" input
  componentDidMount () {
    this.getGenres();
}
// get genres
getGenres = () => {
  this.props.dispatch({type: 'FETCH_GENRES'});
}
// route to homepage
handleCancel = () => {
  this.props.history.push('/');
}
// handle data input for new movie object
handleChange = (event, input) => {
  this.setState({
      ...this.state,
      [input]: event.target.value
  });
  console.log('state:', this.state)
}
// pass new movie object to db
handleSubmit = (event) => {
  event.preventDefault();
  this.props.dispatch({type: 'ADD_A_MOVIE', payload: this.state});
  event.target.reset();
}
// inputs 
    render() {
      return (
        <>  
        <h2>Add A Movie!</h2>
        <form className='inputForm' onSubmit={event => this.handleSubmit(event)}>
          <div id='titleInput'>
          <label className='inputLabel' htmlFor='title'>Title  </label>
          <input required className='inputField' type='text' placeholder='Film Title' onChange={event => this.handleChange(event, 'title')}/>
          </div>
          <br></br>
          <br></br>
          <div id='posterInput'>
          <label className='inputLabel' htmlFor='poster'>Poster Image  </label>
          <input className='inputField' type='text' placeholder='Poster Image' onChange={event => this.handleChange(event, 'poster')}/>
          </div>
          <br></br>
          <br></br>
          <div id='genreInput'>
          <label className='inputLabel' htmlFor='genre'>Choose A Genre  </label>
          <select className='inputField' placeholder='Genre' name='genreSelect' onChange={event => this.handleChange(event, 'genre_id')}>
            {this.props.reduxState.genres.map(genre => {
            return <option key={genre.id} value={genre.id}>{genre.name}</option>;
            })}</select>
          </div>
            <br></br>
            <br></br>
          <div id='descriptionInput'>
              <label className='inputLabel' htmlFor='description'>Description    </label>
              <textarea className='inputField' cols='20' rows='20' name='description' placeholder='Film Description' onChange={event => this.handleChange(event, 'description')}/>
          </div>
          <br></br>
          <button onClick={this.submit}>Save</button>
          <br></br>
          <br></br>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
        
        </>
      );
    };
  };

  const mapStateToProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(mapStateToProps)(AddMovieForm);