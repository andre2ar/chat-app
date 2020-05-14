import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import App from './App';

/* Reducers */
import authReducer from './store/reducers/auth';
import chatReducer from './store/reducers/chat';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer,
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
