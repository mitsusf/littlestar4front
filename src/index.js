import React from 'react';
import ReactDOM from 'react-dom';

// State management
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
// thunk returns function 
import thunkMiddleware from 'redux-thunk';  

// Reducer related
import { searchStars, requestStars } from "./reducers"

// Components
import App from './containers/App';

// Styles etc
import './index.css';
import 'tachyons';

// TBD
import * as serviceWorker from './serviceWorker';   // For offline

const logger = createLogger();
const rootReducer = combineReducers({ searchStars, requestStars }); 

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));


serviceWorker.unregister();
