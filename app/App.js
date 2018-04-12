import React from 'react';
import ReactDOM from 'react-dom';
import DealsGrid from './Components/DealsGrid.js';
import Style from './style.css';

class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <DealsGrid />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
