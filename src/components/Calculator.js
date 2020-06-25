import React from 'react';
import Board from './Board';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      display: '0',
      max_display_units: 15,
    };
  }

  calculate(display) {
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
      return display.slice(0, this.state.max_display_units);
    }
    return display;
  }

  handleClick(i) {
    const history = this.state.history;
    var current_display = this.state.display;
    var new_display = '0';
    var calc_result = '';
    var calculation = current_display;
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
        var step_back = current_display.slice(0, current_display.length -1);
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
            calc_result = this.calculate(current_display);
            new_display = calc_result + i;
            if (calc_result !== current_display){calculation += ' = ' + calc_result};
            break;
          case '=':
            // If '=' is clicked before a valid equation is submitted, default to first term of expression.
            calc_result = this.calculate(current_display);
            new_display = calc_result;
            if (calc_result !== current_display){calculation += ' = ' + calc_result};
            break;
          default:
            break;
        }
      }
    }
    if (calculation !== current_display){
      this.setState({
        history: history.concat(calculation),
        display: new_display.slice(0, this.state.max_display_units)
      });
    } else {
      this.setState({
        display: new_display.slice(0, this.state.max_display_units)
      });
    }
  }

  clearHistory() {
    this.setState({
      history: []
    })
  }

  render() {
    var history = this.state.history;
    const calculations = history.map(calculation => {
      return <li key={calculation}>{calculation}</li>
    });

    return (
      <div className="calculator">
        <div className="calculator-board">
          <Board
            display={this.state.display}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="calculation-history">
          <div>Calculation History</div>
          <ol>{calculations}</ol>
          <div>
            <button className="clearhistory" onClick={() => this.clearHistory()}>Clear History</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator