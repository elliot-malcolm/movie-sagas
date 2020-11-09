import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovieForm extends Component {

  state = {
    title: '',
    poster: '',
    description: '',
    genre_id: null
}

  componentDidMount () {
    this.getGenres();
}

getGenres = () => {
  this.props.dispatch({type: 'FETCH_GENRES'});
}

handleCancel = () => {
  this.props.history.push('/');
}

handleChange = (event, input) => {
  this.setState({
      ...this.state,
      [input]: event.target.value
  });
  console.log('state:', this.state)
}

handleSubmit = (event) => {
  event.preventDefault();
  this.props.dispatch({type: 'ADD_MOVIE', payload: this.state});
}

    render() {
      return (
        <>  
        <h1>Add A Movie!</h1>
        <form className='inputForm' onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor='title'>Title</label>
          <input required type='text' placeholder='Film Title' onChange={event => this.handleChange(event, 'title')}/>
          <br></br>
          <br></br>
          <label htmlFor='poster'>Poster Image</label>
          <input type='text' placeholder='Poster Image' onChange={event => this.handleChange(event, 'poster')}/>
          <br></br>
          <br></br>
          <label htmlFor='genre'>Choose A Genre</label>
          <select placeholder='Genre' name='genreSelect' onChange={event => this.handleChange(event, 'genre_id')}>
            {this.props.reduxState.genres.map(genre => {
            return <option key={genre.id} value={genre.id}>{genre.name}</option>;
            })}</select>
            <br></br>
            <br></br>
          <div className='textArea'>
              <label htmlFor='description'>Description</label>
              <textarea cols='20' rows='20' name='description' placeholder='Film Description' onChange={event => this.handleChange(event, 'description')}/>
          </div>
          <br></br>
          <button onClick={this.submit}>Add Film</button>
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