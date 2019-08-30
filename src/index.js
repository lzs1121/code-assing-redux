import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}> 
        <App title="Progress Bars"/>
    </Provider>,
    document.getElementById('root')
);

