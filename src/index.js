import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import './index.css';
import App from './components/App';

// known issues: 
// 1.exponents lead to scientific notation, which calculator is not equipped to handle.
// 2. decimals are treated as numbers, so they can be used to "glitch in" a bunch of operators in a row

// ========================================

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
