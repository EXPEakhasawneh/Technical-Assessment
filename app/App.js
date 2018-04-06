import React from 'react';
import ReactDOM from 'react-dom';
import Deals from './Deals.js';
import Style from './style.css';

class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <Deals />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
