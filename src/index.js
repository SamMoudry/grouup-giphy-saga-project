import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//saga imports
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//
const sagaMiddleware = createSagaMiddleware();


function* addImages() {

    try {
        const response = yield axios.get(`/api/search/`)

        yield put({ type: 'SET_SEARCH', payload: response.data })
        console.log(response.data)

    } catch (error) {
        alert(`Sorry things aren't working at the moment. Try again later.`);
        console.log('Error getting images', error);
    }

}



// function* sendSearch() {

//     try {
//          yield axios.post('/api/search', action.payload);
//          yield put ({type: 'GET_IMAGES'});
//     } catch {
//         alert(`Sorry I can't send the search input. Try again later.`);
//         console.log('Error adding search input', error);
//     }
// }





// reducer to hold favorited images
const favoriteReducer = (state = [], action ) => {

    if(action.type === 'SET_FAVORITE') {
        return [...state, action.payload];
    }
    return state;
}


// reducer to hold GIPHY search results
const searchReducer = (state = [], action) => {
    console.log(action.payload);
    if(action.type === 'SET_SEARCH') {
        return [...state, action.payload];

    }
    return state
}


function* watcherSaga() {
    yield takeEvery( 'GET_IMAGES', addImages)
    

}


// create store instance that all reducers can use...
const storeInstance = createStore(
    combineReducers({
        //reducers in here
        favoriteReducer,
        searchReducer
    }),
    applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(watcherSaga)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
