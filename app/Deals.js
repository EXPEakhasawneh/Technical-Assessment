import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DealsGrid = (props) => {
  let deals = props.deals;
  return(
    <div>
      <ul>
        {deals.map((deal) => {
          return (
            <li key={deal.hotelInfo.hotelId} className='deal'>
              <ul>
                <li style={{color: '#ff9100'}}>{deal.destination.longName}</li>
                <li>
                  <img className='hotelIMG'
                    src={deal.hotelInfo.hotelImageUrl}
                    alt={deal.destination.longName}/>
                </li>
                <li style={{color: '#004170'}}>
                  {deal.offerDateRange.lengthOfStay} Night/s at
                  {' '} {deal.hotelInfo.hotelName} for
                  {' '} {deal.hotelPricingInfo.totalPriceValue}
                  {' '} {deal.hotelPricingInfo.currency}
                </li>
                <li className='linkButton'>
                  <Router>
                    <Link
                      className='link'
                      target='_blank'
                      to={decodeURIComponent(deal.hotelUrls.hotelInfositeUrl)}>
                        View Deal on Expedia
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

DealsGrid.propTypes = {
  deals: PropTypes.arrayOf(PropTypes.object)
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
      .catch(err => {
        console.log(err);
        this.retrieveDeals();
      })
  }

  render() {
    return(
      <div>
        {!this.state.deals
          ? <p>Loading</p>
          : <DealsGrid
              className='dealsGrid'
              deals={this.state.deals.offers.Hotel}/>}
      </div>
    );
  }
}

export default Deals;
