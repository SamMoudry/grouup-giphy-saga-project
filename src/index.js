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

function* watcherSaga() {
    yield takeEvery('GET_IMAGES', getImages)
    // yield takeEvery('ADD_FAVORITE', addFavorite)
}


function* getImages(action) {

    try {
        console.log('Payload:', action.payload);
        const response = yield axios.post('/api/search', {query: action.payload});
        yield put({ type: 'SET_SEARCH', payload: response.data })

        //yield put({ type: 'SET_SEARCH', payload: response.body })
        //sconsole.log(body)

    } catch (error) {
        alert(`Sorry things aren't working at the moment. Try again later.`);
        console.log('Error getting images', error);
    }

}



// function* addFavorite(action) {

//     try {
//          const response = yield axios.post('/api/favorite', action.payload);
//          yield put ({type: 'SET_FAVORITE', payload: response.data});
//     } catch {
//         alert(`Sorry I can't get favorites. Try again later.`);
//         console.log('Error getting favorites', error);
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
const searchReducer = (state = {}, action) => {
    console.log(action.payload);
    if(action.type === 'SET_SEARCH') {
        console.log("action: ", action);
        return action.payload;

    }
    return state
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
