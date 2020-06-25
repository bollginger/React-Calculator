import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/Calculator';

// known issues: 
// 1.exponents lead to scientific notation, which calculator is not equipped to handle.
// 2. decimals are treated as numbers, so they can be used to "glitch in" a bunch of operators in a row

// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
