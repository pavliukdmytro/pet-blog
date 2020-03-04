require('./scss/global.scss');
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {reducer} from './storage/reducers/redusers.js';

import App from './App/containers/App.js';

const storage = createStore(reducer, applyMiddleware(logger));

render(
    <Provider store={storage}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

