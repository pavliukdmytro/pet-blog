require('./scss/global.scss');
import React from 'react';
import {render} from 'react-dom';

import App from './App/App.js';

render(
    <App />,
    document.querySelector('#root')
);

