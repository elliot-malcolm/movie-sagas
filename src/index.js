import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios'

import { put, takeEvery } from 'redux-saga/effects'

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery ('FETCH_MOVIES', fetchMovies)
    yield takeEvery ('FETCH_GENRES', fetchGenres)
    yield takeEvery ('FETCH_A_MOVIE', fetchSelectedMovie)
    yield takeEvery ('ADD_A_MOVIE', addMovie)
}

// fetchMovies Saga
function* fetchMovies(){
    try{
    const movieArray = yield axios.get('/api/movie');
    yield put({type: 'SET_MOVIES', payload: movieArray.data});
    } catch (error) {
    console.log(error);
    }
}

// fetchGenres Saga
function* fetchGenres() {
    try {
        const genresArray = yield axios.get('/api/genre');
        yield put({type: 'SET_GENRES', payload: genresArray.data});
    } catch (error) {
        console.log(error);
    }
}

// addMovie Saga
function* addMovie(action) {
    try {
        console.log('addMovie saga, payload:', action.payload);
        yield axios.post(`/api/movie`, action.payload);
    } catch (error) {
        console.log(error);
    }
}

// fetchSelectedMovie Saga
function* fetchSelectedMovie (action) {
    console.log('in SelectedMovie', action.payload);
    try{
        const selectedMovie = yield axios.get(`/api/details/${action.payload}`);
        console.log(selectedMovie);
        yield put({type: 'SET_A_MOVIE', payload: selectedMovie.data});
        } catch (error) {
        console.log('fetch error', error); 
        }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// build Details reducer for single movie + 
const selectedMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_A_MOVIE':
                return action.payload;
            default:
                return state;
    }
}

// Details SAGA for GET request + Display on Details Page

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
