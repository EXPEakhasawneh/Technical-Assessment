import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Map from './Map.js';

const Deal = (props) => {
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
                <li>
                    <div className='map'>
                      <Map
                       lat={deal.hotelInfo.hotelLatitude}
                       lng={deal.hotelInfo.hotelLongitude}
                       text={deal.hotelInfo.hotelName}/>
                    </div>
                  </li>
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Deal.propTypes = {
  deals: PropTypes.arrayOf(PropTypes.object)
}

export default Deal;
