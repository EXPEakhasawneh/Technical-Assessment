import React from 'react';
import ReactDOM from 'react-dom';
import Deals from './Deals.js';

class App extends React.Component {
  render() {
    return(
      <div>
        <Deals />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
