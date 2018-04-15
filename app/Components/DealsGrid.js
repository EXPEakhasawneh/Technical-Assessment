import React from 'react';
import queryString from 'query-string';
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
    let searchValue = this.state.searchValue;
    let API = '/api/offers';
    if(Object.values(searchValue).length) {
      if(searchValue.minStarRating === 'Any') {
        delete searchValue.minStarRating;
      }
      if(searchValue.lengthOfStay === '') {
        delete searchValue.lengthOfStay;
      }
      API+= `?${queryString.stringify(searchValue)}`;
    }
    return fetch(API)
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
    this.setState(() => {
      return {searchValue: searchValue};
    }, () => {this.retrieveDeals();});
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
          deals={this.state.deals.offers.Hotel}/>
      </div>
    );
  }
}

export default DealsGrid;
