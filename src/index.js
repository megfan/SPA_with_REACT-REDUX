import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from '../src/store/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(combineReducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));