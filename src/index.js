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
    yield takeEvery ('FETCH_MOVIES', getMovies)
    yield takeEvery ('FETCH_A_MOVIE', getSelectedMovie)
}


// getMovies Saga
function* getMovies(){
    try{
    const movieArray = yield axios.get('/api/movie');
    yield put({type: 'SET_MOVIES', payload: movieArray.data});
    } catch (error) {
    console.log(error);
    }
}

// getSelectedMovie Saga
function* getSelectedMovie (action) {
    console.log('in SelectedMovie', action.payload);
    try{
        const selectedMovie = yield axios.get(`/api/details/${action.payload}`);
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
