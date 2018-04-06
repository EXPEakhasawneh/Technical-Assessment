import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const DealsGrid = (props) => {
  let deals = props.deals.offers.Hotel;

  return(
    <div>
      <ul>
        {deals.map((deal) => {
          return (
            <li key={deal.hotelInfo.hotelId}>
              <ul>
                <li>{deal.destination.longName}</li>
                <li>
                  <img
                    src={deal.hotelInfo.hotelImageUrl}
                    alt={deal.destination.longName}/>
                </li>
                <li>
                  <Router>
                    <Link
                      target='_blank'
                      to={decodeURIComponent(deal.hotelUrls.hotelInfositeUrl)}>
                        Check out on Expedia
                    </Link>
                  </Router>
                </li>
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

class Deals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: null
    }

    this.retrieveDeals = this.retrieveDeals.bind(this);
  }

  componentDidMount() {
    this.retrieveDeals();
  }

  retrieveDeals() {
    return fetch('http://localhost:3000'+'/api/offers')
      .then(response => response.json())
      .then(JSONresponse => {
        this.setState(() => {
          return {deals: JSONresponse};
        })
      })
  }

  render() {
    return(
      <div>
        {!this.state.deals
          ? <p>Loading</p>
          : <DealsGrid deals={this.state.deals}/>}
      </div>
    );
  }
}

export default Deals;
