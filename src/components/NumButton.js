import React from 'react';

function NumButton(props) {
    return (
      <button className="numbutton" onClick={props.onClick}>
        {props.value}
      </button>
    );
}
  
export default NumButton