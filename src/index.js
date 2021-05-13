import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';




const favoriteReducer = (state = [], action ) => {
    if(action.type === 'SET_FAVORITE') {
        return [...state, action.payload];
    }
    return state;
}

// reducer to hold GIPHY search results
const searchReducer = (state = [], action) => {
    if(action.type === 'SET_SEARCH') {
        return [...state, action.payload];
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
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
