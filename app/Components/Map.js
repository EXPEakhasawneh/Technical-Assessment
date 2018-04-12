import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Pin from './pin3.png';

const Marker = (props) => {
    return(
      <div style={mapPin}>
        <img style={{height: '20px', width: '30px'}} src={Pin}/>
      </div>
    )
}

const mapPin = {
  position: 'relative',
  height: 20, width: 30, top: -20, left: -30
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 15,
      lat: '',
      lng: ''
    };
  }
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCEqNTG0Zdyenv3o83wGccNscPq45LTNOs' }}
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
      >
        <Marker
           lat={this.props.lat}
           lng={this.props.lng}
           text={this.props.hotelName}/>
      </GoogleMapReact>
    );
  }
}

export default Map;
