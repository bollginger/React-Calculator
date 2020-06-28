import React from 'react';

function History({ history, clearHistory }) {
    return (
        <ol>
            {history.map(calculation => {
            return <li key={calculation}>{calculation}</li>
            })}
        </ol>
        <div>
          <button className="clearhistory" onClick={() => clearHistory()}>Clear History</button>
        </div>
    );
}

export default History