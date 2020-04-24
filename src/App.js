import React from 'react';
import axios from "axios"
import './App.css';
import VenueFormComponent from './components/VenueFormComponent.js'
import SeatFormComponent from './components/SeatFormComponent.js'
import VenueListComponent from './components/VenueListComponent.js'
import BestSeatComponent from './components/BestSeatComponent.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { venueId: '', seats: [], venues: [] }
  }

  handleVenueCreation = (venueId) => {
    this.setState({ venueId }, () => {
      this.fetchVenues();
      this.fetchSeats(venueId);
    });
  }

  fetchVenues = () => {
    axios.get("http://localhost:3001/api/venues")
      .then(response => {
        this.setState({ venues: response.data, loading: false })
      })
      .catch(error => console.log("Error"))
  }

  fetchSeats = (venueId) => {
    axios
      .get(`http://localhost:3001/api/venues/${this.state.venueId}/seats`)
      .then(response => {
        this.setState({ seats: response.data });
      })
      .catch((error) => console.log("Error"))
  }

  render() {
  return (
    <div>
      <VenueFormComponent handleCreation={this.handleVenueCreation} />
      <VenueListComponent
        handleChange={this.fetchVenues}
        handleVenueCreation={this.handleVenueCreation}
        venues={this.state.venues}
        venueId={this.state.venueId}
      />
      <BestSeatComponent venueId={this.state.venueId}/>
      <SeatFormComponent seats={this.state.seats}/>
    </div>
  );
  }
}

export default App;
