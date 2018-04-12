import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationName: '',
      minStarRating: 'Any',
      lengthOfStay: ''
    };

    this.handleHotelChange = this.handleHotelChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleStayLengthChange = this.handleStayLengthChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHotelChange(event) {
    this.setState({destinationName: event.target.value});
  }

  handleRateChange(event) {
    this.setState({minStarRating: event.target.value});
  }

  handleStayLengthChange(event) {
    this.setState({lengthOfStay: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
      if (!this.canBeSubmitted()) {
        return;
      }
      this.props.onUserInput(
        this.state
      );
  }

  canBeSubmitted() {
    return (!!this.state.destinationName);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Destination:{' '}
          <input
            type='text'
            placeholder='Search...'
            destinationName={this.state.destinationName}
            onChange={this.handleHotelChange}
            required pattern='^[A-Za-z]+$'
            minLength='3'/>
        </label>
        <label>
          {' '}Hotel Rate: {' '}
          <select onChange={this.handleRateChange}>
            <option value='Any'>Any</option>
            <option value='1'>1 Star</option>
            <option value='2'>2 Stars</option>
            <option value='3'>3 Stars</option>
            <option value='4'>4 Stars</option>
            <option value='5'>5 Stars</option>
          </select>
        </label>
        <label>
          {' '}Length Of Staying: {' '}
          <input
            type='number'
            value={this.state.stayLength}
            onChange={this.handleStayLengthChange}/>
        </label>
        <input
          type='submit'
          value='Submit'
          disabled={!this.canBeSubmitted()}/>
      </form>
    );
  }
}

export default Search;
