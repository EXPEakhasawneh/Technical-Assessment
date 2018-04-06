import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const DealsGrid = (props) => {
  let deals = props.deals.offers.Hotel;
  console.log(deals);
  return(
    <div>
      <ul>
        {deals.map((deal) => {
          return (
            <li key={deal.hotelInfo.hotelId} className='deal'>
              <ul>
                <li>{deal.destination.longName}</li>
                <li>
                  <img className='hotelIMG'
                    src={deal.hotelInfo.hotelImageUrl}
                    alt={deal.destination.longName}/>
                </li>
                <li>
                  {deal.offerDateRange.lengthOfStay} Night/s at
                  {deal.hotelInfo.hotelName} for {deal.hotelPricingInfo.totalPriceValue}$
                </li>
                <li>
                  <Router>
                    <Link
                      className='link'
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
          : <DealsGrid
              className='dealsGrid'
              deals={this.state.deals}/>}
      </div>
    );
  }
}

export default Deals;
