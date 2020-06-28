import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import './index.css';
import AppRedux from './containers/AppRedux';

// known issues: 
// 1.exponents lead to scientific notation, which calculator is not equipped to handle.
// 2. decimals are treated as numbers, so they can be used to "glitch in" a bunch
// of operators in a row (this is currently handled in calculate by setting display to '0')
// 3. js math is imprecise, so long decimals result (e.g. 0.75 * 1.2 = 0.8999999...)

// ========================================

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <AppRedux />
  </Provider>,
  document.getElementById('root')
);
