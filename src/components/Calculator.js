import React from 'react';
import NumButton from './NumButton';
import Screen from './Screen';

class Calculator extends React.Component {
  renderNumButton(i) {
    return (
      <NumButton 
        value={i}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderScreen() {
    return (
      <Screen
        value={this.props.display}
      />
    );
  }

  render() {
    let symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    '.', '=', '+', '-', '*', '/', '^', '%', '<-', 'CE'];

    return (
      <div>
        <div className="status">React Calculator</div>
        <div className="calculator-row">
          {this.renderScreen()}
        </div>
          {symbols.map(symbol => {
            return (
            <div>
              {this.renderNumButton(symbol)}
            </div>
            )})}
      </div>
    );
  }
}

export default Calculator