import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import './index.css';
import AppRedux from './containers/AppRedux';

// known issues: 
// 1. decimals are treated as numbers, so they can be used to "glitch in" a bunch
// of operators in a row (this is currently handled in calculate by setting display to '0')
// 2. js math is imprecise, so long decimals result (e.g. 0.75 * 1.2 = 0.8999999...)
// 3. "-" is treated as an operator, so you can't submit a negative number as the second term of an equation

// ========================================

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <AppRedux />
  </Provider>,
  document.getElementById('root')
);
