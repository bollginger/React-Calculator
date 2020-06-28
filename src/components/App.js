import React from 'react';
import Calculator from './Calculator';

var max_display_units = 15;

function calculate(display) {
  var terms = [];
  // equation to calculate is always a string in the form of "term1 operator1 term2"
  // the following isolates the terms and determines which operator to apply
  if (isNaN(display)) {
    if (display.includes('+')) {
      terms = display.split('+').map(x => parseFloat(x, 10));
      display = (terms[0] + terms[1]).toString();
    } else if (display.includes('-')) {
      terms = display.split('-').map(x => parseFloat(x, 10));
      display = (terms[0] - terms[1]).toString();
    } else if (display.includes('*')) {
      terms = display.split('*').map(x => parseFloat(x, 10));
      display = (terms[0] * terms[1]).toString();
    } else if (display.includes('/')) {
      terms = display.split('/').map(x => parseFloat(x, 10));
      display = (terms[0] / terms[1]).toString();
    } else if (display.includes('^')) {
      terms = display.split('^').map(x => parseFloat(x, 10));
      display = (terms[0] ** terms[1]).toString();
    } else if (display.includes('%')) {
      terms = display.split('%').map(x => parseFloat(x, 10));
      display = (terms[0] % terms[1]).toString();
    }
    return display.slice(0, max_display_units);
  }
  return display;
}

const App = ({ history, display, ...reduce_funcs }) => {
  const calculations = history.map(calculation => {
    return <li key={calculation}>{calculation}</li>
  });

  function handleClick(i) {
    let current_display = display;
    let new_display = '0';
    let calc_result = '';
    let calculation = current_display;
    if (!isNaN(i) || i === '.') {
      // If i is a number (or '.'), append it to end of display string (or replace '0' if that is the current display).
      if (current_display === '0') {
        new_display = (i === '' || i === '.') ? '0' + i:i;
      } else {
        new_display = current_display + i;
      }
    } else {
      // If i is an operator and the last char entered before i is also operator or a '.' — replaces 
      // last char with i (except if i is '=' or '<-', in which case the last char is deleted with no replacement)
      if (isNaN(current_display.slice(current_display.length - 1)) || i === '<-' || i === 'CE') {
        let step_back = current_display.slice(0, current_display.length -1);
        switch(i) {
          case '=':
            new_display = step_back;
            break;
          case '<-':
            new_display = (current_display === '0') ? '0':step_back;
            break;
          case 'CE':
            new_display = '0';
            break;
          default:
            new_display = step_back + i;
            break;
        }
      } else {
        // If i is an operator and the last char entered before i is not an operator — performs 
        // calculation if a valid equation is present and updates display.
        switch (i) {
          case '+':
          case '-':
          case '*':
          case '%':
          case '^':
          case '/':
            calc_result = calculate(current_display);
            new_display = calc_result + i;
            if (calc_result !== current_display){calculation += ' = ' + calc_result};
            break;
          case '=':
            // If '=' is clicked before a valid equation is submitted, default to first term of expression.
            calc_result = calculate(current_display);
            new_display = calc_result;
            if (calc_result !== current_display){calculation += ' = ' + calc_result};
            break;
          default:
            break;
        }
      }
    }
    if (calculation !== current_display){
      reduce_funcs.addCalculation(calculation);
    }
    reduce_funcs.updateDisplay(new_display.slice(0, max_display_units));
  }

  return (
    <div className="app">
      <div className="calculator">
        <Calculator
          display={display}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="calculation-history">
        <div>Calculation History</div>
        <ol>{calculations}</ol>
        <div>
          <button className="clearhistory" onClick={() => reduce_funcs.clearCalculations()}>Clear History</button>
        </div>
      </div>
    </div>
  )

}

export default App;