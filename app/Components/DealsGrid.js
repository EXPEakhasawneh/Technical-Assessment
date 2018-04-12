import React from 'react';
import Deal from './Deal.js';
import Search from './Search.js';

class DealsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: null,
      searchValue: {}
    }

    this.retrieveDeals = this.retrieveDeals.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  componentDidMount() {
    this.retrieveDeals();
  }

  retrieveDeals() {
    return fetch('http://localhost:3000/api/offers',
    {qs: this.state.searchValue})
      .then(response => response.json())
      .then(JSONresponse => {
        this.setState(() => {
          return {deals: JSONresponse};
        })
      })
      .catch(err => {
        console.log(err);
        this.retrieveDeals();
      })
  }

  handleUserInput(searchValue) {
    this.setState({
      searchValue: searchValue
    });
    console.log(this.state);
  }

  render() {
    if(this.state.deals === null) {
      return <p>Loading</p>
    }
    return(
      <div>
        <Search
          searchValue={this.props.value}
          onUserInput={this.handleUserInput}/>
        <Deal
          className='dealsGrid'
          deals={this.state.deals.offers.Hotel}/>}
      </div>
    );
  }
}

export default DealsGrid;
