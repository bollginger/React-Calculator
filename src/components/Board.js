import React from 'react';
import NumButton from './NumButton';
import Screen from './Screen';

class Board extends React.Component {
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
    const status = 'TI 2020';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderScreen()}
        </div>
        <div className="board-row">
          {this.renderNumButton('0')}
          {this.renderNumButton('1')}
          {this.renderNumButton('2')}
          {this.renderNumButton('3')}
        </div>
        <div className="board-row">
          {this.renderNumButton('4')}
          {this.renderNumButton('5')}
          {this.renderNumButton('6')}
          {this.renderNumButton('7')}
        </div>
        <div className="board-row">
          {this.renderNumButton('8')}
          {this.renderNumButton('9')}
          {this.renderNumButton('.')}
          {this.renderNumButton('=')}
        </div>
        <div className="board-row">
          {this.renderNumButton('+')}
          {this.renderNumButton('-')}
          {this.renderNumButton('*')}
          {this.renderNumButton('/')}
        </div>
        <div className="board-row">
          {this.renderNumButton('^')}
          {this.renderNumButton('%')}
          {this.renderNumButton('<-')}
          {this.renderNumButton('CE')}
        </div>
      </div>
    );
  }
}

export default Board