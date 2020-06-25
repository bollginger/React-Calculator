import React from 'react';

function Screen(props) {
    return (
      <label className="screen">
        {props.value}
      </label>
    );
}

export default Screen